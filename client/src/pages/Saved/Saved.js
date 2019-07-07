import React, { Component } from 'react';
import SavedBooks from '../../components/SavedBooks'
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

    handleDeleteBook = event => {
        Books.deleteBook(event.target.id)
        let book = this.state.book
        this.setState({ book })
    }

    render() {
        return (
            <>
                <SavedBooks book={this.state.book} handleDeleteBook={this.handleDeleteBook}/>
            </>
        )
    }
}

export default Saved
