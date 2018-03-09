import { combineReducers } from 'redux'
import giphs from './giphs'
import searchTerms from './searchTerms'


const appReducer =  combineReducers({
    data: giphs,
    searchTerms: searchTerms
})

export default appReducer;