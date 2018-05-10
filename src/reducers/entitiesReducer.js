const initialState = {
  repositories: {},
  repos: [],
  pull_requests: {},
  users: {},
}

export default (state = initialState, action) => {

  if (action.response && action.response.entities) {
    return {
      ...state,
        repositories: {
          ...state.repositories,
          ...action.response.entities.repository
        },
        pull_requests: {
          ...state.pull_requests,
          ...action.response.entities.pull_requests
        },
        users: {
          ...state.users,
          ...action.response.entities.user
        }
    }
  }

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

  default: return state;
  }
}
