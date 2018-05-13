import config from '../config';
import { CALL_API, Schemas } from '../middleware/api'
import {
  PULLS_REQUEST,
  PULLS_SUCCESS,
  PULLS_FAILURE,
  GET_REPOSITORIES
} from './types'


export const getPullRequests = (header) => {
  console.log('my header', header);
  
  return({
  [CALL_API]: {
    types: [ PULLS_REQUEST, PULLS_SUCCESS, PULLS_FAILURE ],
    endpoint: `${config.serverUrl}/pullrequests`,
    schema: Schemas.PULLS,
    headers: header
  }
})}

export const getRepositories = (repos, header) => ({
  type: GET_REPOSITORIES,
  repos,
  headers: header
})

export const setPullsFromSocket = (pulls) => ({
  type: 'GET_PULLS',
  pulls
})

export const toggleRepository = (id) => ({
  type: 'TOGGLE_ACTIVE',
  id
})