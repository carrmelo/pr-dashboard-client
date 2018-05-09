import { normalize, schema } from 'normalizr';

import config from '../config';
export const API = Symbol('API');

const userSchema = new schema.Entity('user', {}, { idAttribute: 'loginName' });
const repoSchema = new schema.Entity('repository', {}, { idAttribute: 'fullName' });
const pullSchema = new schema.Entity(
  'pull_requests',
  { repository: repoSchema, user: userSchema },
  { idAttribute: '_id' }
);

const pullRequestSchema = [ pullSchema ];


export const api
 = store => next => action => {
  if (action[API]) {
    const { url, method, body, header } = action[API];
    fetch(config.baseServer + url, {
      method: method || 'GET',
      body: JSON.stringify(body),
      header
    })
    .then(response => response.json())
    .then(data => {
      const normalizedData = normalize(data, pullRequestSchema);        
      store.dispatch({
        type: action.type + '_SUCCESS',
        normalizedData
      })
    })
    .catch(error => {
      store.dispatch({
        type: action.type + '_FAILURE',
        error
      })
    })
    next({
      ...action,
      type: action.type + '_REQUEST'
    });
  } else {
    next(action);
  }
}