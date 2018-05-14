export function authHeader() {

  const user = JSON.parse(localStorage.getItem('user'));

  if (user) {
    return { 'Authorization': `JWT ${user.token}` }
  } else {
    return {}
  }
  
}