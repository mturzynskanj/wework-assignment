import React from 'react'
// import HomePage from './components/pages/HomePage.jsx'

import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

//custom components
import Header from './components/header'
import HomePage from './components/pages/HomePage.jsx'


console.log()




// const HomePage = () => (
//     <div className="inner-container">
//     <h2>Hello home page....</h2>
//     </div> 
// )

const App = ({ store }) => (
    <div className=''>
        <Provider store={store} >
            <BrowserRouter>
                <div>
                    <Route path='/' component={Header} />
                    <Route path="/" component={HomePage} />
                </div>
            </BrowserRouter>
        </Provider>
    </div>
)

export default App