import { LOAD_IMAGES } from '../actionTypes';
import { archiveSearch } from './archiveSearch'

import api from '../api';

function buildUrl(formData) {
    let { search, limit, rating } = formData;
    search = search;
    limit = limit ? limit : 10;
    rating = rating ? rating : 'pg13';
    return encodeURI('https://api.giphy.com/v1/gifs/search?api_key=a26bYHTlcSRLsx0DdEt8EY2dEg0kw8rf&q=' + search + '&limit=' + limit + '&offset=0&+ rating=' + rating + '&lang=en')

}

export const loadImages = (data = []) => {
    return {
        type: LOAD_IMAGES,
        data
    }
}

export const getTrendingImg = (url) => (dispatch) => {
    return api.giphy.fetchInitialData().then(data => { return data.data }).then(data => dispatch(loadImages(data)))
}

export const getSearchImg = (formData) => (dispatch) => {
    return api.giphy.fetchData(buildUrl(formData)).then(data => data.data).then(data => dispatch(loadImages(data))).then(() => dispatch(archiveSearch(formData)))
}
