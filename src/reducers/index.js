import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer';
import entitiesReducer from './entitiesReducer';
import searchReducer from './searchReducer'; 

export default combineReducers({
  entities: entitiesReducer,
  authentication: authenticationReducer, 
  search: searchReducer
})