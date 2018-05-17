const jwtDecode = require('jwt-decode');

export function checkJWT() {

  const user = JSON.parse(localStorage.getItem('redux-state'));
  const token = user.authentication.token
  const data = jwtDecode(token)

  const current_time = Date.now().valueOf() / 1000;
    return (data.exp < current_time) ? true : false

}
