
import {
  GET_REPOSITORIES, 
  REPOS_GET_SUCCESS, 
  REPOS_GET_FAIL, 
  REPOS_GET_REQUEST
} from '../actions/types'


const initialState = {
  repositories: {},
  pull_requests: {},
  users: {},
}

export default (state = initialState, action) => {

  if (action.response && action.response.entities) {
    return {
      ...state,
        repositories: {
          ...state.repositories,
          ...action.response.entities.repositories
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
    case REPOS_GET_REQUEST: 
      return state
    case REPOS_GET_SUCCESS:
      return { ...state, repositories: { ...action.response.entities.repositories }}

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

    case 'GET_PULLS':
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
