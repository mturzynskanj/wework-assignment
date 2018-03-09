
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'

import styles from './styles/index.scss'
import configureStore from './store'
const store = configureStore();



ReactDOM.render(<App  store = {store}/>, document.getElementById('root'));

// ReactDOM.render(
//     <BrowserRouter>
//         <Provider store={store}>
//             <Route component={App} />
//         </Provider>
//     </BrowserRouter>, document.getElementById('root')
// )


