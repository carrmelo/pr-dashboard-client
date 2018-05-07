export const allRepositories = (repos) => ({
  type: 'REPOSITORIES',
  repos
})

export const togglePR = (id) => ({
  type: 'TOGGLE_ACTIVE',
  id
})