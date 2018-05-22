import { 
	SEARCH_TERM 
} from '../actions/types'

const INITIAL_STATE = ""

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case SEARCH_TERM: 
			return action.payload
		default: 
			return state
	}
}