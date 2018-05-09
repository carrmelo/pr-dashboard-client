const initialState = {
  repos: [],
  repositories: {},
  pull_requests: {},
  users: {},
}


const reducer = (state = initialState, action) => {
  
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

    default: return state;
  }
}

export default reducer;