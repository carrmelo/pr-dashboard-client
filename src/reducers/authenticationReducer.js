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

    } else if (action.response && action.response.entities && action.type === "USER_INFO_SUCCESS") {
      
      return {
        ...state,
        currentUser: action.response.entities.user
      }

    } else {

      return state;
    }
}
