import { combineReducers } from 'redux'
import giphs from './giphs'
import searchTerms from './searchTerms'
import currentSearch from './currentSearch'


const appReducer =  combineReducers({
    data: giphs,
    searchTerms: searchTerms,
    currentSearch: currentSearch
})

export default appReducer;