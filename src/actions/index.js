import { CALL_API, Schemas } from '../middleware/api'
import {
  PULLS_REQUEST,
  PULLS_SUCCESS,
  PULLS_FAILURE,
  GET_REPOSITORIES,
  TOGGLE_WEBHOOK_REQUEST,
  TOGGLE_WEBHOOK_SUCCESS,
  TOGGLE_WEBHOOK_FAILURE,
  REPOS_GET,
  PULLS_GET,
  REPO_ACTIVATED,
  SELECTED_PULLREQUESTS,
  COLOR_SELECTED,
  SOCKETS_PULLS_SET, 
  SEARCH_TERM
} from './types'

import axios from 'axios'
import { authHeader } from '../helpers/auth-header'

const BASE_API_URL = `${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_API_VERSION}`

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

export const searchTerm = (term) => {
  return {
    type: SEARCH_TERM, 
    payload: term
  }
}

export const setPullsFromSocket = (pulls) => ({
  type: SOCKETS_PULLS_SET,
  payload: pulls
})

export const toggleRepository = (id, action) => ({
  type: 'TOGGLE_WEBHOOK',
  [CALL_API]: {
    endpoint: `${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_API_VERSION}/repos/${id}/${action}`,
    method: 'PATCH'
  }
})

export const selectColor = (repoID, colorHex) => {

  const PATCH_COLOR_URL = BASE_API_URL + `/repos/${repoID}/${colorHex}` // /repos/${id}/${action}
  
  const axiosConfig = { headers: authHeader() }

  
  console.log('****', axiosConfig)


  return dispatch => {
    axios.patch(PATCH_COLOR_URL, axiosConfig)
      .then((response) => {
          
          console.log('RESPONSE', response)

      })
      dispatch({
        type: COLOR_SELECTED, 
        payload: 'COLOR'
      })
  }
}









