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
        isAuthenticated: true,
        fetchingAuth: false
      }
    } 

    if (action.error === 'token expired') return initialState
    
    switch (action.type) {
      case 'GET_USER_INFO_REQUEST':
        return {
          ...state,
          // fetchingAuth: true
        }

      case 'GET_USER_INFO_SUCCESS':
        return {
          ...state,
          currentUser: action.response,
          // fetchingAuth: false,
        }

      case 'GET_USER_INFO_FAILURE':
      case 'LOGIN_USER_FAILURE':
        return {
          ...state,
          fetchingAuth: false
        }

      case 'LOGIN_USER_REQUEST':
        return {
          ...state,
          fetchingAuth: true,
        }

      case 'LOGOUT_USER':
        return initialState

      default:
        return state;
    }
}
