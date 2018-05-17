const initialState = {
  currentUser: [],
  token: '',
  isAuthenticated: false,
  fetchingAuth: false,
  error: ''
};

export default (state = initialState, action) => {

    if (action.response && action.response.token) {
      return {
        ...state,
        token: action.response.token,
        isAuthenticated: true
      }
    } 

    if (action.error === 'token expired') return initialState
    
    switch (action.type) {
      
      case 'GET_USER_INFO_SUCCESS':
      return {
        ...state,
        currentUser: action.response
      }
      
      case 'GET_USER_INFO_REQUEST':
      case 'GET_USER_INFO_FAILURE':
      case 'LOGIN_USER_REQUEST':
      case 'LOGIN_USER_FAILURE':
        return {
          ...state
        }

      case 'LOGOUT_USER':
        return initialState

      default:
        return state;
    }
}
