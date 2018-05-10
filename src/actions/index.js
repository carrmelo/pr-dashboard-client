import config from '../config';
import { CALL_API, Schemas } from '../middleware/api'

export const PULLS_REQUEST = 'PULLS_REQUEST'
export const PULLS_SUCCESS = 'PULLS_SUCCESS'
export const PULLS_FAILURE = 'PULLS_FAILURE'

export const TOGGLE_REQUEST = 'TOGGLE_REQUEST'
export const TOGGLE_SUCCESS = 'TOGGLE_SUCCESS'
export const TOGGLE_FAILURE = 'TOGGLE_FAILURE'

export const getPullRequests = () => ({
  [CALL_API]: {
    types: [ PULLS_REQUEST, PULLS_SUCCESS, PULLS_FAILURE ],
    endpoint: `${config.baseServerUrl}/pullrequests`,
    schema: Schemas.PULLS
  }
})

export const toggleActive = (id, action) => ({
  [CALL_API]: {
    types: [TOGGLE_REQUEST, TOGGLE_SUCCESS, TOGGLE_FAILURE ],
    endpoint: `${config.baseServerUrl}/repos/${id}/${action}`
  }
})

export const allRepositories = (repos) => ({
  type: 'REPOSITORIES',
  repos
})

export const toggleRepository = (id) => ({
  type: 'TOGGLE_ACTIVE',
  id
})