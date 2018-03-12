import { UPDATE_SEARCH_FORM } from '../actionTypes'

function searchForm(state = {search:'', limit:10, rating:'PG13'}, action) {
	const { type, updateObj } = action
	switch (type) {
		case UPDATE_SEARCH_FORM: {	
			return {...state, ...updateObj};
		}
		default: {
			return state
		}
	}
	return stata;
}

export default searchForm