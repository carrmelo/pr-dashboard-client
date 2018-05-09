const initialState = {
  repos: {},
  pull_requests: {},
  users: {},
}


const reducer = (state = initialState, action) => {
  
  switch (action.type) {

    case 'PULL_REQUESTS':
      return {
        ...state,
        pulls: [
          ...action.pulls
        ]
      }

  default: return state;
  }
}

export default reducer;