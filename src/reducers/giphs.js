import { LOADED_TRENDING_GIFS, LOADED_SEARCH_GIFS} from '../actionTypes';


export default function giphs(state = [], action = {}) {
    const { type, data } = action;
    switch (type) {
        case LOADED_TRENDING_GIFS: {
            state=[];
            return [...state, ...data]
        }
        case LOADED_SEARCH_GIFS:{
            state=[];
            return [...state, ...data]
        }
        default:  
            return state;
    }
    return state;
}