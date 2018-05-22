import { CALL_API } from '../middleware/api'

export const getUserInfo = () => ({
  type: 'GET_USER_INFO',
  [CALL_API]: {
    endpoint: `${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_API_VERSION}/user/me`,
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
