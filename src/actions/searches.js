import { ADD_SEARCH, CURRENT_SEARCH } from '../actionTypes'

export const addSearch = (searchCriteria= {}) => {
    console.log('inside addSearch');
    return {
        type: ADD_SEARCH,
        searchCriteria
    }
}
