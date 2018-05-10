import * as actionTypes from './authActionTypes';

export const injectUser = (user) => ({
  type: ActionTypes.INJECT,
  user
})

export const logoutUser = () => ({
  type: ActionTypes.LOGOUT
})