import io from 'socket.io-client';

const socket = io.connect('https://pr-dashboard-server.herokuapp.com/');

export default socket;