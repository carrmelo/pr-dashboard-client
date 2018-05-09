import config from '../config';
import { API } from '../middleware/api'

export const getPullRequests = () => ({
  type: 'GET_PULLS',
  [API]: {
    url: `${config.baseServerUrl}/pullrequests`
  }
})

