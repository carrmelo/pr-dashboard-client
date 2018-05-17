const initialState = {
  repositories: {},
  pull_requests: {},
  users: {},
  loadedEntities: false
}

export default (state = initialState, action) => {

  if (action.response && action.response.entities && action.type !== "USER_INFO_SUCCESS") {
    return {
      ...state,
        repositories: {
          ...state.repositories,
          ...action.response.entities.repositories
        },
        pull_requests: {
          ...state.pull_requests,
          ...action.response.entities.pull_requests
        },
        users: {
          ...state.users,
          ...action.response.entities.user
        },
        loadedEntities: true
    }
  }

  if (action.error === 'token expired') return initialState
  
  switch (action.type) {
    case 'REPOS_GET_REQUEST':
    case 'PULLS_GET_REQUEST':
      return { 
        ...state, 
        loadedEntities: false
      }

    case 'REPOS_GET_SUCCESS':
      return {
        ...state,
        repositories: {
          ...action.response.entities.repositories
        },
        loadedEntities: true
      }

    case 'TOGGLE_WEBHOOK_SUCCESS':
    const post = state.repositories[action.response.id]
      return {
        ...state,
        repositories: {
          ...state.repositories,
          [action.response.id] : {
            ...post,
            hookEnabled: !post.hookEnabled
          }
        }
      }

    // case SOCKETS_PULLS_SET:
    //   return {
    //     ...state,
    //       repositories: {
    //         ...state.repositories,
    //         ...action.pulls.entities.repository
    //       },
    //       pull_requests: {
    //         ...state.pull_requests,
    //         ...action.pulls.entities.pull_requests
    //       },
    //       users: {
    //         ...state.users,
    //         ...action.pulls.entities.user
    //       }
    //   }

    case 'LOGOUT_USER':
      return initialState

    // Update Pull Requests from socket
    case 'pull_request_received':
    return {
      ...state,
      pull_requests: {
        ...action.data.entities.pull_requests
      },
      users: {
        ...action.data.entities.user
      }
    }

    // Update Repositories from socket
    case 'repos-update_received':

    return {
      ...state,
      repositories: {
        ...action.data.entities.repositories
      }
  }

  default: return state;
  }
}
