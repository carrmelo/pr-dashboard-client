export const allRepositories = (repos) => ({
  type: 'REPOSITORIES',
  repos
})

export const toggleRepository = (id) => ({
  type: 'TOGGLE_ACTIVE',
  id
})