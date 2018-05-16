const initialState = {
  currentUser: [],
  token: '',
  isAuthenticated: false,
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

    if (action.error === 401) return initialState
    
    switch (action.type) {
      case "GET_USER_INFO_SUCCESS":
        return {
          ...state,
          currentUser: action.response
        }

      case 'LOGOUT_USER':
        return initialState

      default:
        return state;
    }
}
