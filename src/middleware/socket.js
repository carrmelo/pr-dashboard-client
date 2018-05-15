import io from 'socket.io-client';

const socket = url => store => {
  let socket = io(url);

  socket.on('message', data => {
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
    console.log('ACTION');

    console.log(action);

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
