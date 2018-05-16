const jwtDecode = require('jwt-decode');

export function checkJWT() {

  const user = JSON.parse(localStorage.getItem('redux-state'));
  const token = user.authentication.token
  const data = jwtDecode(token)

  return data

}
