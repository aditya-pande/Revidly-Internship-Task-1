import React from 'react'

const SearchBar = (props) => (
    <div>
        <input
            type="text"
            placeholder={props.placeholder}
        />
    </div>
)

export default SearchBar