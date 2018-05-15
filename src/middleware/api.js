import { normalize, schema } from 'normalizr';
import { authHeader } from '../helpers/auth-header'
// Fetch and normalizr of API

const callApi = (endpoint, schema, method) => {
  
  return fetch(endpoint, {
    headers: authHeader(), 
    method: method || 'GET'
  })
    .then(response => 
      response.json()
      .then(json=> {
        
        if (!response.ok) {
          return Promise.reject(json)
        }
        if (json.token) {
          return Object.assign({}, json)
        }
        if (!schema) return json

          return Object.assign({},
            normalize(json, schema)
          
          )
      })
    )

}

// Defining Schemas for normalizing data

const userSchema = new schema.Entity('user', {}, { idAttribute: 'loginName' });
const repoSchema = new schema.Entity('repositories', {}, { idAttribute: 'fullName' });
const pullSchema = new schema.Entity(
  'pull_requests',
  { repositories: repoSchema, user: userSchema },
  { idAttribute: '_id' }
);

export const Schemas = {
  REPOS: [ repoSchema ],
  PULLS: [ pullSchema ],
  USER: [ userSchema ]
}

export const CALL_API = 'CALL_API'

const actionWith = (data, action) => {
  console.log('PRE', action)
  console.log('PRE', data)
  const finalAction = Object.assign({}, action, data)
  delete finalAction[CALL_API]
   console.log('AFTER', action)
  console.log('AFTER', data)
  return finalAction
}

export default store => next => action => {
  
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }
  //method
  
  const { schema, types, endpoint, method } = callAPI
  
  console.log('****', action)
  // next({
  //   ...action,
  //   type: action.type + '_REQUEST'
  // })
  
  console.log('POST', action)
  return callApi(endpoint, schema, method).then(
    response => store.dispatch(actionWith({
      type: action.type + '_SUCCESS',
      response
    })),
    error => store.dispatch(actionWith({
      type: action.type + '_FAILURE',
      error: error.message || 'Something bad happened'
    }))
  )
}