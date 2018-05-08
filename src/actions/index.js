export const allRepositories = (repos) => ({
  type: 'REPOSITORIES',
  repos
})

export const toggleRepository = (id) => ({
  type: 'TOGGLE_ACTIVE',
  id
})

export const allPullRequests = (pulls) => ({
  type: 'PULL_REQUESTS',
  pulls
})