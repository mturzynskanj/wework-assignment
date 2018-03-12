import { ARCHIVE_SEARCH } from '../actionTypes'


export default function searchTerms(state = [], action) {
    const { type, searchCriteria } = action;
    switch (type) {
        case ARCHIVE_SEARCH: {
            if (!state.find(item => item.search === searchCriteria.search)) {
                return [...state, searchCriteria]
            } else {
                return state;
            }
        }
        default:
            return state
    }
    return state;
}