import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import appReducer from '../reducers/index'


export default function configureStore(initialState){
    return createStore(appReducer,composeWithDevTools(applyMiddleware(thunk)))
}