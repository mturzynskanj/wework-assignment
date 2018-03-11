import { CURRENT_SEARCH } from '../actionTypes'

export default function currentSearch(state='', action) {
    const { type, current } = action
    switch (type) {
        case CURRENT_SEARCH: {
            return state = current
        }
        default: {
            return state
        }
    }
    return state;
}