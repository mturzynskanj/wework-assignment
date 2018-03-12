import React from 'react'
import InlineError from '../messages/InlineError'
import Validator from 'validator'
import { connect } from 'react-redux'

import SearchedList from '../SearchedList'
import { getSearchGIFs } from '../../actions/getGifs'
import { updateSearchFormData } from '../../actions/searchFormData'


class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        let formData = this.props.searchForm;
        this.state = {
            errors: {}
        }

        this.validate = this.validate.bind(this)
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(e) {
        this.props.updateSearchFormData({ [e.target.name]: e.target.value })
    }

    validate(data) {
        const errors = {};
        if (!data.search) errors.search = "Cannot be blank";
        return errors;
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const errors = this.validate(this.props.searchForm);
        console.log('errors====', errors);
        this.setState({ errors })
        if (Object.keys(errors).length === 0) {
            this.props.getSearchGIFs(this.props.searchForm)
                .then(() => {
                    let data = this.props.searchForm;
                    this.props.history.push('/result?search=' + `${data.search}` + '&limit=' + `${data.limit}` + '&rating=' + `${data.rating}`)
                })
                .catch(err => this.setState({error: err.response.data.error}))
        }
    }

    render() {
        const { errors } = this.state
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
                                value={this.props.searchForm.search}
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
                                value={this.props.searchForm.limit}
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
                                value={this.props.searchForm.rating}
                                onChange={this.onChange}
                                placeholder="Rating"
                            />

                            {errors.rating && <InlineError text={errors.rating} />}
                        </div>
                        <div>
                            <input type='submit' value="Search" />
                        </div>
                    </form>
                    {this.props.searchTerms.length > 0 && <SearchedList {...this.props} />}
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.data,
        searchTerms: state.searchTerms,
        searchForm: state.searchForm
    }
}

export default connect(mapStateToProps, { updateSearchFormData, getSearchGIFs })(SearchForm)