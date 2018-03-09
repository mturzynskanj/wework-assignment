import React from 'react'
import { Form, Button, Message } from 'semantic-ui-react'
import InlineError from '../messages/InlineError'

import Validator from 'validator'




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
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(){
        console.log('inside submit function....', this.state);
        const errors = this.validate(this.state.data)
        this.setState({ errors });
         if (Object.keys(errors).length === 0) {
             console.log('this state data', this.state.data);
             this.props
                .submit(this.state.data)
         }
    }

    onChange(e) {
        this.setState({ data: { ...this.state.data, [e.target.name]: [e.target.value] } })
    }

    validate(data){
        const errors ={};
        if(!data.search) errors.search = "Cannot be blank"
        return errors;
    }

    render() {
        const { data, errors, loading } = this.state
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label htmlFor="Search Term">Search Term </label>
                    <input
                        type="text"
                        id="search"
                        name="search"
                        value={data.search}
                        onChange={this.onChange}
                        placeholder="Enter the search term "
                    />
                </Form.Field>
                {errors.search && <InlineError text={errors.search} />}
                <Form.Field>
                    <label htmlFor="Limit">Limit</label>
                    <input
                        type="text"
                        id="limit"
                        name="limit"
                        onChange={this.onChange}
                        placeholder="How many images"
                    />
                </Form.Field>
                {errors.limit && <InlineError text={errors.limit} />}
                <Form.Field>
                    <label htmlFor="Ratings">Ratings</label>
                    <input
                        type="text"
                        id="rating"
                        name="rating"
                        onChange={this.onChange}
                        placeholder="Rating"
                    />
                </Form.Field>
                {errors.rating && <InlineError text={errors.rating} />}
                <button>Search Giphs </button>
            </Form>
        )
    }
}

export default SearchForm