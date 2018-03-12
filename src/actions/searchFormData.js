import { UPDATE_SEARCH_FORM } from '../actionTypes'

/* this action is dispatched after  user selects the search term from the Select options */

export const updateSearchFormData = (updateObj = {}) => {
    return {
        type: UPDATE_SEARCH_FORM,
        updateObj
    }
};





