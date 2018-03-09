import axios from 'axios'

/*
https://api.giphy.com/v1/gifs/search?api_key=a26bYHTlcSRLsx0DdEt8EY2dEg0kw8rf&q=marathon&limit=25&offset=0&rating=G&lang=en


*/

export default {
    giphy : {
        fetchInitialData: (url)=> axios.get('https://api.giphy.com/v1/gifs/trending?api_key=a26bYHTlcSRLsx0DdEt8EY2dEg0kw8rf&limit=1')
        .then(res=> { console.log('iside fetch initial data..', res.data); return res.data}),

        search: (url)=>axios.get(url)
        .then(res => res.data)

    }
}