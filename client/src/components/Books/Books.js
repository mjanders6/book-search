import React from 'react'

const Book = ({ book }) => {
    <div>
        {
            book.map(({ title }) => (
                <h1>{title}</h1>
            ))
        }
    </div>

}

export default Book