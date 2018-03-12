import React from 'react'

const SearchItem = ({ item, current }) => {
    console.log('item is ', item);
    return (
        <option name="search" value={item.search}  >{item.search}</option>
    )
}

// const SearchedList = ({ searches, getSearchGIFs, currentSearch}) => {
class SearchedList extends React.Component {
    constructor(props){
        const { searchTerms, current, updateSearchFormData, getSearchGIFs } = props
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
       this.props.getSearchGIFs({'search':event.target.value});
       this.props.history.push('/result?search='+ event.target.value)
       this.props.updateSearchFormData({search:event.target.value});
    }
    render (){
        return (
            <div className='ui-flex'>
                <label> Saved search terms </label>
                <select name='search' onChange={(event) => this.handleChange(event)}>
                    {
                        this.props.searchTerms && this.props.searchTerms.map((item) => <SearchItem key={item.search} item={item} current={this.props.current} />)
                    }
                </select>
            </div>
        )
    }
   
}

export default SearchedList


