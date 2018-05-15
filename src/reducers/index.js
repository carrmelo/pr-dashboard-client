import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer';
import entitiesReducer from './entitiesReducer';
import socketsReducer from './socketsReducer';

export default combineReducers({
  entities: entitiesReducer,
  authentication: authenticationReducer,
  sockets: socketsReducer
})