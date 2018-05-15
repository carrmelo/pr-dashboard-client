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
    case 'update_pull_requests_sent':
    return {
      ...state,
    }
    case 'update_pull_requests_received':
    return {
      ...state,
    }
    case 'update_pull_requests_error':
    return {
      ...state,
    }

    // ----------------------------------------------
    // Repositories
    // ----------------------------------------------
    case 'update_repositories_requests_sent':
    return {
      ...state,
    }
    case 'update_repositories_requests_received':
    return {
      ...state,
    }
    case 'update_repositories_requests_error':
    return {
      ...state,
    }

  default: return state;
  }
}