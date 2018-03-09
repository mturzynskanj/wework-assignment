import { ADD_SEARCH, SELECT_SEARCH } from '../actionTypes'

 const addSearch = (searchTerm ='') => {
    console.log('inside addSearch');
    return {
        type: ADD_SEARCH,
        searchTerm
    }
}

export default addSearch