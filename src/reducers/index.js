import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer';
import entitiesReducer from './entitiesReducer';

export default combineReducers({
  entities: entitiesReducer,
  authentication: authenticationReducer
})