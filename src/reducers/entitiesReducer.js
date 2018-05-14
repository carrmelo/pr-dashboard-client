
import {
  GET_REPOSITORIES
} from '../actions/types'


const initialState = {
  repositories: {},
  repos: [],
  pull_requests: {},
  users: {},
}

export default (state = initialState, action) => {
  
  if (action.response && action.response.entities && action.type !== "USER_INFO_SUCCESS") {
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
    case GET_REPOSITORIES:
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

    case 'SET_PULLS':
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
