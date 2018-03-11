import React from 'react'
import InlineError from '../messages/InlineError'
import Validator from 'validator'
import { connect } from 'react-redux'

import SearchedList from '../SearchedList'
import { getSearchGIFs } from '../../actions/getGifs'
import { currentSearch } from '../../actions/searches'


class SearchForm extends React.Component {
    constructor(props) {
        console.log('Search Form props....', props);
        super(props);
        this.state = {
            formData: {
                search: '',
                rating: '',
                limit: ''
            },
            loading: false,
            errors: {}
        }

        this.validate = this.validate.bind(this)
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ formData: { ...this.state.formData, [e.target.name]: e.target.value } })
    }

    validate(data) {
        const errors = {};
        if (!data.search) errors.search = "Cannot be blank"
        return errors;
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const { search, rating, limit } = this.state.formData;
        const errors = this.validate(this.state.formData);
        this.setState({ errors })
        if (Object.keys(errors).length === 0) {
            this.props.getSearchGIFs(this.state.formData)
                .then(() => {
                    this.props.history.push('/result?search='+ `${search}`)
                    this.props.currentSearch(this.state.formData.search)
                })
        }
    }

    render() {
        const { data, errors, loading } = this.state
        return (
            <section className="container with-borders">
                <div className="inner-container ui-flex">
                    <form className="inline-form" method="post" onSubmit={this.handleSubmit}>
                        <div>

                            <label htmlFor="Search">Search Term </label>
                            <input
                                type="text"
                                id="search"
                                name="search"
                                value = {this.state.formData.search}
                                onChange={this.onChange}
                                placeholder="Enter the search term"
                            />

                            {errors.search && <InlineError text={errors.search} />}
                        </div>
                        <div>
                            <label htmlFor="Limit">Limit</label>
                            <input
                                type="text"
                                id="limit"
                                name="limit"
                                onChange={this.onChange}
                                placeholder="How many images"
                            />

                            {errors.limit && <InlineError text={errors.limit} />}
                        </div>
                        <div>
                            <label htmlFor="ratings">Ratings</label>
                            <input
                                type="text"
                                id="rating"
                                name="rating"
                                onChange={this.onChange}
                                placeholder="Rating"
                            />

                            {errors.rating && <InlineError text={errors.rating} />}
                        </div>
                        <div>
                            <input type='submit' value="Search" />
                        </div>
                    </form>
                   {this.props.searchTerms.length > 0  && <SearchedList {...this.props} />}
                </div>
            </section>
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

export default connect(mapStateToProps, { currentSearch, getSearchGIFs })(SearchForm)