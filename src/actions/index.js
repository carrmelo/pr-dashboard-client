import { CALL_API, Schemas } from '../middleware/api'
import {
<<<<<<< HEAD
  PULLS_REQUEST,
  PULLS_SUCCESS,
  PULLS_FAILURE,
  GET_REPOSITORIES,
  TOGGLE_WEBHOOK_REQUEST,
  TOGGLE_WEBHOOK_SUCCESS,
  TOGGLE_WEBHOOK_FAILURE
=======
  REPOS_GET,
  PULLS_GET,
  REPO_ACTIVATED,
  SELECTED_PULLREQUESTS,
  COLOR_SELECTED,
  SOCKETS_PULLS_SET
>>>>>>> develop
} from './types'

export const getRepositories = () => ({
  type: REPOS_GET,
  [CALL_API]: {
    endpoint: `${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_API_VERSION}/repos`,
    schema: Schemas.REPOS
  }
})

export const getPullRequests = () => ({
  type: PULLS_GET,
  [CALL_API]: {
    endpoint: `${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_API_VERSION}/pullrequests`,
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
  type: SOCKETS_PULLS_SET,
  payload: pulls
})
<<<<<<< HEAD

export const toggleRepository = (id, action) => ({
  [CALL_API]: {
    types: [
      TOGGLE_WEBHOOK_REQUEST,
      TOGGLE_WEBHOOK_SUCCESS,
      TOGGLE_WEBHOOK_FAILURE
    ],
    endpoint: `${config.baseServerUrl}/repos/${id}/${action}`,
    method: 'PATCH'
  }
})
=======
>>>>>>> develop
