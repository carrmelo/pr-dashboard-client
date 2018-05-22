import {
	PULLS_NOTIFICATION_PATH_SUCCESS
} from '../actions/types'

const INITIAL_STATE = null

export default (state = INITIAL_STATE, action) => {
	switch(action.type){		
		case PULLS_NOTIFICATION_PATH_SUCCESS: 
	      	return action.payload
		default: 
			return state
	}
}

    