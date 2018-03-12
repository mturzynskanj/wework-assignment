import React from 'react'
import { connect } from 'react-redux'

import {getSearchGIFs, getTrendingGIFs } from '../../actions/getGifs'
import {updateSearchFormData} from '../../actions/searchFormData'
import addSearch from '../../actions/searches'

import ItemsList from '../ItemsList'
import SearchForm from '../forms/SearchForm'
import SearchedList from '../SearchedList'


class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        if(this.props.location.search){
            const params = new URLSearchParams(this.props.location.search);
            this.props.getSearchGIFs({'search':params.get('search'), 'limit':params.get('limit'), 'rating': params.get('rating') });
            this.props.updateSearchFormData({'search':params.get('search')})
        } else {
            this.props.getTrendingGIFs()
        }      
    }

    render() {
        return (
            <div>
                <SearchForm {...this.props}/>
                <div className="inner-container">
                    {this.props.searchForm && this.props.searchForm.search && <h4>Result search for: {this.props.searchForm.search.toUpperCase()}</h4>}
                    <ItemsList imagesData={this.props.data} />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.data,
        current: state.currentSearch,
        searchForm: state.searchForm
    }
}

export default connect(mapStateToProps, { updateSearchFormData, getSearchGIFs, getTrendingGIFs })(HomePage)