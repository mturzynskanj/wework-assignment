import React from 'react'
import { connect } from 'react-redux'
import { getTrendingGIFs } from '../../actions/getGifs'
import addSearch from '../../actions/searches'


import ItemsList from '../ItemsList'
import SearchForm from '../forms/SearchForm'

import SearchedList from '../SearchedList'


//const HomePage = ({ data, getTrendingGIFs, getSearchGIFs }) => {
class HomePage extends React.Component {
    constructor(props) {
        console.log('what are the props...', props);
        super(props);
    }
    
    componentDidMount() {
        this.props.getTrendingGIFs()
    }

    render() {
        return (
            <div>
                <SearchForm />
                <div className="inner-container">
                    <ItemsList imagesData={this.props.data} />
                </div>
            </div>
        )
    }
}

// class HomePage extends React.Component {
//     constructor(props) {
//         let {data, getTrendingGIFs, getSearchGIFs} = props;
//         super(props)
//         this.submit = this.submit.bind(this)
//     }

//     submit(){
//         this.getSearchGIFs()
//     }

//     render(){
//         return(
//             <div>
//                  <h2>Home page</h2>
//                 <nav>
//                     <button onClick={() => getTrendingGIFs()}>Trending  </button>
//                 </nav>
//                 <SearchForm submit={this.submit} />
//                 <ItemsList imagesData={data} />
//             </div>
//         )
//     }

// }

function mapStateToProps(state) {
    return {
        data: state.data,
        searchTerms: state.searchTerms
    }
}

export default connect(mapStateToProps, { getTrendingGIFs })(HomePage)