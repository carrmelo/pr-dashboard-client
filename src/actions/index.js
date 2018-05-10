import config from '../config';
import { CALL_API, Schemas } from '../middleware/api'

export const PULLS_REQUEST = 'PULLS_REQUEST'
export const PULLS_SUCCESS = 'PULLS_SUCCESS'
export const PULLS_FAILURE = 'PULLS_FAILURE'

export const getPullRequests = () => ({
  [CALL_API]: {
    types: [ PULLS_REQUEST, PULLS_SUCCESS, PULLS_FAILURE ],
    endpoint: `${config.baseServerUrl}/pullrequests`,
    schema: Schemas.PULLS
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