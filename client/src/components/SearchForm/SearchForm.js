import React from 'react'

const SearchForm = ({ handleFormSubmit, handleInputChange, bookSearch}) =>
    <form>
        <p>
            <label htmlFor="bookSearch">Book Search:</label>
            <input id="bookSearch" type="text" value={bookSearch} onChange={handleInputChange} />
        </p>

        <button onClick={handleFormSubmit}>Add Student</button>
    </form>

    export default SearchForm