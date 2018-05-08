const prd = {
  repos: [],
  pulls: []
}

const reducer = (state = prd, action) => {
  
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
              repo.active = !repo.active
              return repo
            } else return repo
          })
      }

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