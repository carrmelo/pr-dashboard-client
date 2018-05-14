import config from '../config';
import { CALL_API, Schemas } from '../middleware/api'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
  USER_INFO_FAILURE
} from './types';

export const getUserInfo = () => ({
  [CALL_API]: {
    types: [ USER_INFO_REQUEST, USER_INFO_SUCCESS, USER_INFO_FAILURE ],
    endpoint: `${config.serverUrl}/user/me`,
    schema: Schemas.USER  
  }
})

export const loginUser = (code) => ({
  [CALL_API]: {
    types: [ LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE ],
    endpoint: `${config.serverUrl}/auth/callback${code}`
  }
})

// export const logoutUser = () => ({
//   type: ActionTypes.LOGOUT
// })