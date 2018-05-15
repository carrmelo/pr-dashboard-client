export function authHeader() {

  const user = JSON.parse(localStorage.getItem('redux-state'));

  if (user) {
    return { 'Authorization': `JWT ${user.authentication.token}` }
  } else {
    return {}
  }

}
