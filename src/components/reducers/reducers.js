const prd = {
  repos: []
}

const reducer = (state = prd, action) => {
  console.log("action", action);
  
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
            if (repo.id === action.id) {
              repo.active = !repo.active
              return repo
            } else return repo
          })
      }

  default: return state;
  }
}

export default reducer;