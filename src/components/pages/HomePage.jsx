import React from 'react'
import { connect } from 'react-redux'
import {getSearchGIFs, getTrendingGIFs } from '../../actions/getGifs'
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
        if(this.props.location.search){
            const params = new URLSearchParams(this.props.location.search);
            console.log('params', params.get('search'));
            this.props.getSearchGIFs({'search':params.get('search') });
        } else {
            this.props.getTrendingGIFs()
        }
        
    }

    render() {
        return (
            <div>
                <SearchForm {...this.props}/>
                <div className="inner-container">
                    {this.props.current && <h4>Result search for: {this.props.current.toUpperCase()}</h4>}
                    <ItemsList imagesData={this.props.data} />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.data,
        searchTerms: state.searchTerms,
        current: state.currentSearch
    }
}

export default connect(mapStateToProps, {getSearchGIFs, getTrendingGIFs })(HomePage)