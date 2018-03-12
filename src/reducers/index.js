import { combineReducers } from 'redux'
import loadImages from './loadImages'
import searchTerms from './searchTerms'
import searchForm from './searchForm'



const appReducer = combineReducers({
    data: loadImages,
    searchTerms: searchTerms,
    searchForm: searchForm
})

export default appReducer;