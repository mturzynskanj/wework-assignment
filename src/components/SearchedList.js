import React from 'react'



const SearchItem = ({ item, submitSearch }) => (
    <option name="search" value={item} >{item}</option>
)

const SearchedList = ({ searches, submitSearch }) => {
    console.log('submitSearch ', submitSearch)
    return (
        <select name='search' placeholder="Your previous searches" onChange={(event) => submitSearch({'search':[event.target.value]})} >
            {
                searches.map((item) => <SearchItem key={item} item={item} />)
            }

        </select>
    )
}

export default SearchedList 