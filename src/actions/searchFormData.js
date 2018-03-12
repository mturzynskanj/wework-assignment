import { UPDATE_SEARCH_FORM } from '../actionTypes'

export const updateSearchFormData = (updateObj = {}) => {
    return {
        type: UPDATE_SEARCH_FORM,
        updateObj
    }
};





