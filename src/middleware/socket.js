import { normalize } from 'normalizr';
import { Schemas } from './api'
import io from 'socket.io-client';

const socket = url => store => {
  let socket = io(url);

  socket.on('message', async data => {
    console.log(data.payload);
    if (data.type === 'pull_request') {
      const normalizedPulls = await normalize(data.payload, Schemas.PULLS);
      data.payload = normalizedPulls;
    } else if (data.type === 'repos-update') {
      const normalizedRepos = normalize(data.payload, Schemas.REPOS);
      data.payload = normalizedRepos;
    }

    store.dispatch({
      type: data.type + '_received',
      data: data.payload,
    })
  });

  socket.on('exception', data => {
    console.error(data.error);
    store.dispatch({
      type: data.type + '_error',
      error: data.error,
    })
  });

  return next => action => {
    try {
      const usersObj = store.getState('authentication').authentication.currentUser;
      const name = usersObj[0].loginName;

      if (name) {
        socket.emit('hook-id-to-user', (name))
      }
    } catch (err) {
      //
    }

    if(!action.socket) return next(action);

    const {message, payload} = action.socket;

    socket.emit('message', message, payload);

    next({
      ...action,
      type: action.type + '_sent'
    });
  }
}

export default socket;
