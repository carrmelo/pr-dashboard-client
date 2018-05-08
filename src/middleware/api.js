import config from '../config';
export const API = Symbol('API');

export const api = store => next => action => {
  if (action[API]) {
    const { url, method, body, header } = action[API];
    fetch(config.baseServer + url, {
    
      body: JSON.stringify(body),  method: method || 'GET',
      header
    })
    .then(response => response.json())
    .then(data => {
      store.dispatch({
        type: action.type + '_SUCCESS',
        data,
        user: action.user
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