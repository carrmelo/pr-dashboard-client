export const STATE_KEY = 'currentUser';

const initialState = {
  currentUser: {},
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

    } else if (action.type === "GET_USER_INFO_SUCCESS") {
      
      return {
        ...state,
        currentUser: action.response.entities.user
      }

    } else if (action.type === 'LOGOUT_USER') {

      return initialState

    } else {

      return state;
    }
}
