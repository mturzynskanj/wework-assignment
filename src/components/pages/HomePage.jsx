import React from 'react'
import { connect } from 'react-redux'
import { getTrendingGIFs, getSearchGIFs } from '../../actions/getGifs'
import addSearch  from '../../actions/searches'
console.log('getSearchGIFs', getSearchGIFs);

import ItemsList from '../ItemsList'
import SearchForm from '../forms/SearchForm'

import SearchedList from '../SearchedList'


//const HomePage = ({ data, getTrendingGIFs, getSearchGIFs }) => {
class HomePage extends React.Component {
    constructor(props) {
        console.log('what are the props...', props);
        super(props);
        this.submit = this.submit.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }
    submit(formData) {
        console.log('form data...', formData);
        this.props.getSearchGIFs(formData)
    }
    handleClick(){
        this.props.getTrendingGIFs()
    }
    render() {
        return (
            <div className="inner-container">
                <h2>Home page</h2>
                <nav>
                    <button onClick={this.handleClick}>Trending  </button>
                </nav>
                {/* <SearchForm submit={(test)=>this.submit(test)} />
                <SearchedList searches = {this.props.searchTerms}  submitSearch = {this.props.getSearchGIFs}/> */}
               {/* <ItemsList imagesData={this.props.getTrendingGIFs()} />  */}
                {/* <ItemsList imagesData={this.props.getTrendingGIFs()} />  */}
                
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

export default connect(mapStateToProps, { getTrendingGIFs, getSearchGIFs })(HomePage)