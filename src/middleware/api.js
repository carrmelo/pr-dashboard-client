import { normalize, schema } from 'normalizr';
import { authHeader } from '../helpers/auth-header'
// Fetch and normalizr of API

const callApi = (endpoint, schema, method) => {

  return fetch(endpoint, {
    headers: authHeader(),
    method: method || 'GET'
  })
    .then(response => {
      const contentType = response.headers.get('Content-Type')
      console.log('Hola', contentType)
      console.log('Chao', response)
      if (contentType && contentType.indexOf('application/json') !== -1) {
        return response.json()
        .then(json=> {
          
          if (!response.ok) {
            return Promise.reject(json)
          }
          if (json.token) {
            return Object.assign({}, json)
          }
          if (!schema) {
            return json
          }
          
          return Object.assign({},
            normalize(json, schema)
            
          )
        })
      } else {
        if (!response.ok) {
          return Promise.reject(response)
        } else {
          return response.url;
        }
      }
    })

}

// Defining Schemas for normalizing data

const userSchema = new schema.Entity('user', {}, { idAttribute: '_id' });
const repoSchema = new schema.Entity('repositories', {}, { idAttribute: '_id' });
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
  const finalAction = Object.assign({}, action, data)
  delete finalAction[CALL_API]
  return finalAction
}

export default store => next => action => {

  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  const { schema, types, endpoint, method } = callAPI

  next({
    ...action,
    type: action.type + '_REQUEST'
  })

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
