import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions/types';

export const STATE_KEY = 'currentUser';

const initialState = {
  currentUser: {},
  isAuthenticated: false,
  error: ''
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    console.log('LLEGUE', action);
    if (action.response && action.response.token) {
      return {
        ...state,
        currentUser: action.response.token,
        isAuthenticated: true
      }
    }

    switch(type) {
      case LOGIN_REQUEST:
        return {
          ...state,
        }
    
      // case actionTypes.LOGOUT:
      //   return {
      //     ...initialState
      //   }

      default:
        return state;
    }
}
