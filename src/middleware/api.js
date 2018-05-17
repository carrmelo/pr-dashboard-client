import { normalize, schema } from 'normalizr';
import { authHeader } from '../helpers/auth-header'
import { checkJWT } from '../helpers/jwt-checker'

// Fetch and normalizr of API

const callApi = (endpoint, schema, method) => {

  return fetch(endpoint, {
    headers: authHeader(),
    method: method || 'GET'
  })
    .then(response => {      
      const contentType = response.headers.get('Content-Type')
      if (contentType && contentType.indexOf('application/json') !== -1) {
        return response.json()
        .then(json=> {
          
          if (!response.ok) {
            if (response.status === 401) {
              var current_time = Date.now().valueOf() / 1000;
                if ( checkJWT().exp < current_time) {
                  localStorage.clear();
                  return Promise.reject('token expired')
                }
            }
            return Promise.reject(response.status)
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
          if (response.status === 401) {
            var current_time = Date.now().valueOf() / 1000;
              if ( checkJWT().exp < current_time) {
                localStorage.clear();
                return Promise.reject('token expired')
              }
          }
          return Promise.reject(response.status)
        } else {
          return response;
        }
      }
    })

}

// Defining Schemas for normalizing data

const userSchema = new schema.Entity('user', {}, { idAttribute: '_id' });
const repoSchema = new schema.Entity('repositories', {}, { idAttribute: '_id' });
const pullSchema = new schema.Entity(
  'pull_requests',
  { repositories: repoSchema },
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

  const { schema, endpoint, method } = callAPI

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
      error: error || 'Something bad happened'
    }))
  )
}
