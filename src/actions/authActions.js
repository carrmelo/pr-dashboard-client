import config from '../config';
import { CALL_API } from '../middleware/api'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './types';

export const loginUser = (code) => ({
  [CALL_API]: {
    types: [ LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE ],
    endpoint: `${config.serverUrl}/auth/callback${code}`
  }
})

// export const logoutUser = () => ({
//   type: ActionTypes.LOGOUT
// })