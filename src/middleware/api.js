import { normalize, schema } from 'normalizr';
import { authHeader } from '../helpers/auth-header'
// Fetch and normalizr of API

const callApi = (endpoint, schema) => {
  console.log(endpoint, schema);
  
  return fetch(endpoint, {
    headers: authHeader()
  })
    .then(response => 
      response.json()
      .then(json=> {
        console.log('IM RESPONSE', response);
        console.log('IM JASON', json);
        
        if (!response.ok) {
          return Promise.reject(json)
        }
        if (json.token) {
          return Object.assign({}, json)
        }

        return Object.assign({},
          normalize(json, schema)
        
        )
      })
    )
}

// Defining Schemas for normalizing data

const userSchema = new schema.Entity('user', {}, { idAttribute: 'loginName' });
const repoSchema = new schema.Entity('repository', {}, { idAttribute: 'fullName' });
const pullSchema = new schema.Entity(
  'pull_requests',
  { repository: repoSchema, user: userSchema },
  { idAttribute: '_id' }
);

export const Schemas = {
  PULLS: [ pullSchema ]
}

export const CALL_API = 'Call API'

export default store => next => action => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint } = callAPI
  const { schema, types } = callAPI

  // if (typeof endpoint === 'function') {
  //   endpoint = endpoint(store.getState())
  // }

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [ requestType, successType, failureType ] = types
  next(actionWith({ type: requestType }))

  return callApi(endpoint, schema).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  )
}