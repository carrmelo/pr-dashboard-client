import { CALL_API, Schemas } from '../middleware/api'
import axios from 'axios'
import {
  REPOS_GET,
  PULLS_GET,
  REPO_ACTIVATED, 
  SELECTED_PULLREQUESTS, 
  COLOR_SELECTED,
  SOCKETS_PULLS_SET, 
  SEARCH_TERM, 
  TOGGLE_WEBHOOK, 
  ACTIVATE_REPO
} from './types'

import { authHeader } from '../helpers/auth-header'


let BASE_PATCH_URL = `${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_API_VERSION}/repos/` 

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

// export const repoSwitch = (repoID) => {
//   return {
//     type: REPO_ACTIVATED, 
//     payload: repoID
//   }
// }

export const toggleRepository = (id, toggleActive) => ({
   type: TOGGLE_WEBHOOK,
   [CALL_API]: {
    endpoint: `${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_API_VERSION}/repos/${id}/${toggleActive}`,
    method: 'PATCH'
  }
})

/*id, toggleActive*/
// payload: `${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_API_VERSION}/repos/${id}/${toggleActive}`,
export const toggleRepo = (repoID, repoActive) => {


  
  console.log('FFF', authHeader())

  // ${id}/${toggleActive}
  // repos/5afae266151ccf00042c4f15/enable
  return dispatch => {
    BASE_PATCH_URL += `${repoID}/${repoActive}`

    axios.patch(BASE_PATCH_URL, "DATA", {headers: authHeader()})
      .then(response => {
        console.log(response)
            dispatch({ 
            type: ACTIVATE_REPO,
            payload: 'ONOFFREPO' 
          })
      })   
  }
}
   
export const getSelectedPullRequests = () => {
  return {
    type: SELECTED_PULLREQUESTS, 
    payload: 'FOLLOWED ONES'
  }
}

export const selectColor = (color) => {
  return {
    type: COLOR_SELECTED, 
    payload: color
  }
}

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

