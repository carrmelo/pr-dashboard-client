import { normalize, schema } from 'normalizr';
import { checkJWT } from '../helpers/jwt-checker'

// Fetch and normalizr of API

const callApi = (endpoint, schema, method, customHeaders, body) => {
  
  let headers = {};
  if(body) {
    headers['Content-Type'] = 'application/json';
  }
  headers = {
    ...headers,
    ...customHeaders,
  }

  return fetch(endpoint, {
    headers,
    method: method || 'GET', 
    body: JSON.stringify(body)
  })
    .then(response => {      
      const contentType = response.headers.get('Content-Type')
      if (response.ok && contentType && contentType.includes('application/json')) {
        return response.json()
        .then(json=> {
          
          if (!schema) {
            return json
          }
          
          return Object.assign({},
            normalize(json, schema)
            
          )
        })
      } else if (!response.ok) {
        if (response.status === 401 && checkJWT()) {
          localStorage.clear();
          return Promise.reject('token expired')
        }
        return Promise.reject(response.status)
      } else {
        return response;
      }
    })

}

// Defining Schemas for normalizing data

const userSchema = new schema.Entity('user', {}, { idAttribute: '_id' });
const repoSchema = new schema.Entity('repositories', {}, { idAttribute: '_id' });
const pullSchema = new schema.Entity('pull_requests', {}, { idAttribute: '_id' });

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

  const { schema, endpoint, method, body } = callAPI

  next({
    ...action,
    type: action.type + '_REQUEST'
  })

  const state = store.getState();
  const token = state.authentication.token;

  const headers = token 
    ? {
      'Authorization': `JWT ${token}`
    }
    : {};
  
  return callApi(endpoint, schema, method, headers, body).then(
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
