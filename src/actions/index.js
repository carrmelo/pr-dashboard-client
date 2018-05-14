import config from '../config';
import { CALL_API, Schemas } from '../middleware/api'
import {
  PULLS_REQUEST,
  PULLS_SUCCESS,
  PULLS_FAILURE,
  GET_REPOSITORIES,
  TOGGLE_WEBHOOK_REQUEST,
  TOGGLE_WEBHOOK_SUCCESS,
  TOGGLE_WEBHOOK_FAILURE
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

export const setPullsFromSocket = (pulls) => ({
  type: 'GET_PULLS',
  pulls
})

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