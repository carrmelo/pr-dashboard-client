import { CALL_API, Schemas } from '../middleware/api'

// import {
//   LOGIN_REQUEST,
//   LOGIN_SUCCESS,
//   LOGIN_FAILURE,
//   USER_INFO_REQUEST,
//   USER_INFO_SUCCESS,
//   USER_INFO_FAILURE,
//   LOGOUT_USER
// } from './types';

export const getUserInfo = () => ({
  type: 'GET_USER_INFO',
  [CALL_API]: {
    endpoint: `${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_API_VERSION}/user/me`,
    schema: Schemas.USER  
  }
})

export const loginUser = (code) => ({
  type: 'LOGIN_USER',
  [CALL_API]: {
    endpoint: `${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_API_VERSION}/auth/callback${code}`
  }
})

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})