import React from 'react'
import InlineError from '../messages/InlineError'
import Validator from 'validator'
import { connect } from 'react-redux'

import SearchedList from '../SearchedList'
import { getSearchImg } from '../../actions/getImages'
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
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.props.getSearchImg(this.props.searchForm)
                .then(() => {
                    let data = this.props.searchForm;
                    this.props.history.push('/result?search=' + `${data.search}` + '&limit=' + `${data.limit}` + '&rating=' + `${data.rating}`)
                })
                .catch(err => this.setState({ error: err.response.data.error }))
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
                            <select name='limit' value={this.props.searchForm.limit} onChange={(event) => this.onChange(event)}>>
                                <option name="limit" value='5' >5</option>
                                <option name="limit" value='10'>10</option>
                                <option name="limit" value='15'>15</option>
                                <option name='limit' value='25'>20</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="rating">Limit</label>
                            <select name='rating' value={this.props.searchForm.rating} onChange={(event) => this.onChange(event)}>>
                                <option name="rating"  value='y'>youth</option>
                                <option name="rating" value='g'>G</option>
                                <option name="rating" >PG</option>
                                <option name='rating' value='pg-13'>PG-13</option>
                                <option name='rating' value='R'>R</option>
                            </select>
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

export default connect(mapStateToProps, { updateSearchFormData, getSearchImg })(SearchForm)