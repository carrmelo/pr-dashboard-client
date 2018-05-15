const initialState = {
  repositories: {},
  repos: [],
  pull_requests: {},
}

export default (state = initialState, action) => {

  switch (action.type) {
    // ----------------------------------------------
    // Pull Requests
    // ----------------------------------------------
    case 'pull_request_received':
    return {
      ...state,
        repositories: {
          ...state.repositories,
          ...action.pulls.entities.repository
        },
        pull_requests: {
          ...state.pull_requests,
          ...action.pulls.entities.pull_requests
        },
        users: {
          ...state.users,
          ...action.pulls.entities.user
        }
    }

    // ----------------------------------------------
    // Repositories
    // ----------------------------------------------
    case 'repositories_received':
    return {
      ...state,
      repositories: {
        ...action.response.entities.repositories
      }
    }

  default: return state;
  }
}