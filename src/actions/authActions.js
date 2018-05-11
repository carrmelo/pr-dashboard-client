import * as ActionTypes from './types';

export const injectUser = (user) => ({
  type: ActionTypes.INJECT,
  user
})

export const logoutUser = () => ({
  type: ActionTypes.LOGOUT
})