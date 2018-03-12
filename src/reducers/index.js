import { combineReducers } from 'redux'
import giphs from './giphs'
import searchTerms from './searchTerms'
import currentSearch from './currentSearch'
import searchForm from './searchForm'



const appReducer = combineReducers({
    data: giphs,
    searchTerms: searchTerms,
    currentSearch: currentSearch,
    searchForm: searchForm
})

export default appReducer;