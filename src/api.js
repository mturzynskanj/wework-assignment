import axios from 'axios'

/*
https://api.giphy.com/v1/gifs/search?api_key=a26bYHTlcSRLsx0DdEt8EY2dEg0kw8rf&q=marathon&limit=25&offset=0&rating=G&lang=en


*/

export default {
    giphy : {
        trending: (url)=> axios.get('https://api.giphy.com/v1/gifs/trending?api_key=a26bYHTlcSRLsx0DdEt8EY2dEg0kw8rf&limit=5')
        .then(res=> res.data),

        search: (url)=>axios.get(url)
        .then(res => res.data)

    }
}