import axios from 'axios'

export default {
    giphy : {
        fetchInitialData: (url)=> axios.get('https://api.giphy.com/v1/gifs/trending?api_key=a26bYHTlcSRLsx0DdEt8EY2dEg0kw8rf&limit=10')
        .then(res=> { console.log('iside fetch initial data..', res.data); return res.data}),

        fetchData: (url)=>axios.get(url)
        .then(res => res.data)

    }
}