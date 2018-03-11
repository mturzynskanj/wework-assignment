import { ADD_SEARCH, CURRENT_SEARCH } from '../actionTypes'

export const addSearch = (searchTerm ='') => {
    console.log('inside addSearch');
    return {
        type: ADD_SEARCH,
        searchTerm
    }
}

export const currentSearch = (current='')=>{
    return {
        type: CURRENT_SEARCH,
        current
    }
}