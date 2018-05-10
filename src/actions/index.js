import config from '../config';
import { CALL_API, Schemas } from '../middleware/api'
import {
  PULLS_REQUEST,
  PULLS_SUCCESS,
  PULLS_FAILURE, 
  GET_REPOSITORIES
} from './types'


export const getPullRequests = () => ({
  [CALL_API]: {
    types: [ PULLS_REQUEST, PULLS_SUCCESS, PULLS_FAILURE ],
    endpoint: `${config.baseServerUrl}/pullrequests`,
    schema: Schemas.PULLS
  }
})

export const getRepositories = (repos) => ({
  type: GET_REPOSITORIES,
  repos
})

export const toggleRepository = (id) => ({
  type: 'TOGGLE_ACTIVE',
  id
})