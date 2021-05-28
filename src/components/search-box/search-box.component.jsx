import React from 'react'

import './search-box.styles.css'

export const SearchBox = ({placeholder,handleChange}) => {
    return (
        <div>
            <input className='search size' type='search' placeholder={placeholder} onChange={handleChange}/>
        </div>
    )
}
