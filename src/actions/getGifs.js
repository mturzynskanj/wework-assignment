import { LOADED_TRENDING_GIFS, LOADED_SEARCH_GIFS } from '../actionTypes';
import addSearch  from './searches'

import api from '../api';


function buildUrl(formData){
    console.log('here comes formData', formData)
    let {search, limit, rating} = formData;

    search = search[0] ;
    limit = limit && limit[0] ? limit[0] : '';
    rating = rating && rating[0] ? rating[0] : '';

    console.log('search, limit rating', search, limit, rating);

    return encodeURI('https://api.giphy.com/v1/gifs/search?api_key=a26bYHTlcSRLsx0DdEt8EY2dEg0kw8rf&q='+ search +'&limit='+ limit +'&offset=0&+ rating='+ rating +'&lang=en')


}


export const loadedTrendingGIFs = (data=[])=>{
    return {
        type: LOADED_TRENDING_GIFS,
        data
    }
}


export const loadedSearchGIFs = (data=[])=>{
    return {
        type: LOADED_SEARCH_GIFS,
        data
    }
}


export const getTrendingGIFs = (url) => (dispatch) => {
    return   api.giphy.fetchInitialData().then(data => { console.log('data is.....',data); return  data.data}).then(data => dispatch(loadedTrendingGIFs(data)))
}


export const getSearchGIFs= (formData) => (dispatch) => {
    return api.giphy.search(buildUrl(formData)).then(data => data.data).then(data=>dispatch(loadedSearchGIFs(data))).then(() =>dispatch(addSearch(formData.search[0])))
}
 