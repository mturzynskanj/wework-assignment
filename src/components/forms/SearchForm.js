import React from 'react'
import InlineError from '../messages/InlineError'
import Validator from 'validator'
import { connect } from 'react-redux'

import SearchedList from '../SearchedList'
import { getSearchGIFs } from '../../actions/getGifs'




class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
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
        this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } })
    }

    validate(data) {
        const errors = {};
        if (!data.search) errors.search = "Cannot be blank"
        return errors;
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const { search, rating, limit } = this.state.data;
        const errors = this.validate(this.state.data);
        this.setState({ errors })
        if (Object.keys(errors).length === 0) {
            this.props.getSearchGIFs(this.state.data)
            .then(()=>console.log('done.......... '))
               
        }
    }

    render() {
        const { data, errors, loading } = this.state
        return (
            <section className="container with-borders">
                <div className="inner-container">
                    <form className="inline-form" method="post" onSubmit={this.handleSubmit}>
                        <div>

                            <label htmlFor="Search">Search Term </label>
                            <input
                                type="text"
                                id="search"
                                name="search"
                                value={data.search}
                                onChange={this.onChange}
                                placeholder="Enter the search term "
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
                    <SearchedList searches={this.props.searchTerms} submitSearch={this.props.getSearchGIFs}/>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.data,
        searchTerms: state.searchTerms
    }
}

export default connect(mapStateToProps, { getSearchGIFs })(SearchForm)