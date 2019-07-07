import React, { Component } from 'react';
import Book from '../../components/Books'
import Books from '../../utils'

class Saved extends Component {

    state = {
        bookSearch: '',
        book: []
    }

    componentDidMount() {
        Books.getAllBooks()
            .then(({ data }) => {
                let book = []
                data.forEach(bookItem => {
                    let bookCollection = {
                        title: bookItem.title,
                        authors: bookItem.authors,
                        description: bookItem.description,
                        image: bookItem.image,
                        link: bookItem.link,
                        id: bookItem._id
                    }
                    book.push(bookCollection)
                })
                this.setState({
                    book
                })
            })
            .catch(e => console.error(e))
    }

    render() {
        return (
            <>
                <Book book={this.state.book} />
            </>
        )
    }
}

export default Saved
