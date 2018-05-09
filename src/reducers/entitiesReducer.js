const initialState = {
  repositories: {},
  repos: [],
  pull_requests: {},
  users: {},
  fetching: false,
  error: null
}

export default (state = initialState, action) => {
  
  switch (action.type) {
    case 'REPOSITORIES':
      return {
        ...state,
        repos: [
          // ...state.repos,
          ...action.repos
        ]
      }

    case 'TOGGLE_ACTIVE':
      return {
        ...state,
        repos: state.repos.filter(repo => {
            if (repo._id === action.id) {
              repo.hookEnabled = !repo.hookEnabled
              return repo
            } else return repo
          })
      }
      
    case 'PULL_REQUESTS':
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

    case 'GET_PULLS_REQUESTS':
      return {
        ...state,
        fetching: true
      }

    case 'GET_PULLS_FAILURE':
      return {
        ...state,
        fetching: false,
        error: action.payload
      }

    case 'GET_PULL_SUCCESS':
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
        },
        fetching: false
      }

  default: return state;
  }
}
