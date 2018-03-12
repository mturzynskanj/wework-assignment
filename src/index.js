
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'

import styles from './styles/index.scss'
import configureStore from './store'
const store = configureStore();

// {
//     let obj={};

//     let obj2 = {['name'+1]:'maria'};

//     let obj3 = {['name'+2]: '40'}

//      obj = {...obj, ...obj2, ...obj3};

//    // console.log('result is ', result);
//     console.log('obj',obj);
// }

// {
//     let arr = [{ term: 'cat' }, { term: 'dogs' }, { term: 'chicken' }, { term: 'caw' }];
//     let result = arr.find(item => item.term === 'cat')
//     if(result ){
//         console.log('found')
//     } else {
//         console.log('not found')
//     }
//     //console.log('result is ', result);

// }



ReactDOM.render(<App  store = {store}/>, document.getElementById('root'));

// ReactDOM.render(
//     <BrowserRouter>
//         <Provider store={store}>
//             <Route component={App} />
//         </Provider>
//     </BrowserRouter>, document.getElementById('root')
// )


