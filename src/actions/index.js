import config from '../config';
import { CALL_API, Schemas } from '../middleware/api'
import {
  PULLS_REQUEST,
  PULLS_SUCCESS,
  PULLS_FAILURE,
  GET_REPOSITORIES, 

  REPOS_GET_REQUEST, 
  REPOS_GET_SUCCESS, 
  REPOS_GET_FAIL, 

  REPO_ACTIVATED, 
  SELECTED_PULLREQUESTS, 

  COLOR_SELECTED

} from './types'

export const getRepositories = () => ({
  [CALL_API]: {
    types: [ 
      REPOS_GET_REQUEST, 
      REPOS_GET_SUCCESS, 
      REPOS_GET_FAIL
    ], 
    endpoint: `${config.baseServerUrl}/repos`, 
    schema: Schemas.REPOS
  }
})

export const getPullRequests = () => ({
  [CALL_API]: {
    types: [ PULLS_REQUEST, PULLS_SUCCESS, PULLS_FAILURE ],
    endpoint: `${config.serverUrl}/pullrequests`,
    schema: Schemas.PULLS,
  }
})

export const repoSwitch = (repoID) => {
  return {
    type: REPO_ACTIVATED, 
    payload: repoID
  }
}

export const getSelectedPullRequests = () => {
  return {
    type: SELECTED_PULLREQUESTS, 
    payload: 'FOLLOWED ONES'
  }
}

// export const toggleRepository = (id) => ({
//   type: 'TOGGLE_ACTIVE',
//   id
// })

export const selectColor = (color) => {
  return {
    type: COLOR_SELECTED, 
    payload: color
  }
}

export const setPullsFromSocket = (pulls) => ({
  type: 'SET_PULLS',
  pulls
})

