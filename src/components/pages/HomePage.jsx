import React from 'react'
import { connect } from 'react-redux'

import {getSearchImg, getTrendingImg } from '../../actions/getImages'
import {updateSearchFormData} from '../../actions/searchFormData'
import archiveSearch from '../../actions/archiveSearch'

import ItemsList from '../ItemsList'
import SearchedList from '../SearchedList'
import SearchForm from '../forms/SearchForm'


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.buildQueryString = this.buildQueryString.bind(this)
    }

    componentDidMount() {
        if(this.props.location.search){
            this.props.getSearchImg(this.buildQueryString());
            this.props.updateSearchFormData(this.buildQueryString());
        } else {
            this.props.getTrendingImg()
        }      
    }

    buildQueryString (){  
        const params = new URLSearchParams(this.props.location.search);
        const queryStr = {'search': params.get('search'), 'limit': params.get('limit'), 'rating': params.get('rating')}
        return queryStr;
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
        searchForm: state.searchForm
    }
}

export default connect(mapStateToProps, { updateSearchFormData, getSearchImg, getTrendingImg })(HomePage)