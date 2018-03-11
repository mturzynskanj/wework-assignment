import { ADD_SEARCH } from '../actionTypes'


export default function searchTerms(state = [], action) {
    const { type, searchTerm } = action;
    switch (type) {
        case ADD_SEARCH: {
            if(  state.includes(searchTerm)){
                return state
            } else {
                return [...state, searchTerm]  
            }
        }


        default:
            return state
    }
    return state;
}