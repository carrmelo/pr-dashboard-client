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
    endpoint: `${config.baseServerUrl}/pullrequests`,
    schema: Schemas.PULLS
  }
})

// export const getRepositories = (repos) => ({
//   type: GET_REPOSITORIES,
//   repos
// })

export const setPullsFromSocket = (pulls) => ({
  type: 'GET_PULLS',
  pulls
})

export const toggleRepository = (id) => ({
  type: 'TOGGLE_ACTIVE',
  id
})