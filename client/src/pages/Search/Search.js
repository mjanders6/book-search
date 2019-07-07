import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm'
import Book from '../../components/Books'
import Axios from 'axios'
import Books from '../../utils';

class Search extends Component {

  state = {
    bookSearch: '',
    book: [],
    bookSaved: false
  }

  componentDidMount() {

  }

  handleInputChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.bookSearch}&key=AIzaSyAHUvS6qzHlvDeDvwthvsWUlYs3NjnqqY4`)
      .then(({ data: { items } }) => {
        let book = []
        items.forEach(bookItem => {
          let bookCollection = {
            title: bookItem.volumeInfo.title,
            authors: bookItem.volumeInfo.authors,
            description: bookItem.volumeInfo.description,
            image: bookItem.volumeInfo.imageLinks.thumbnail,
            link: bookItem.volumeInfo.infoLink,
            id: items.indexOf(bookItem)
          }
          book.push(bookCollection)
        })
        console.log(book)
        this.setState({
          book
        })
      })
      .catch(e => console.error(e))
  }

  handleSaveBook = event => {
    Books.saveBook(this.state.book[event.target.id])
    this.setState({ bookSaved: true })
    console.log(this.state.book[event.target.id])
  }

  render() {
    return (
      <>
        <SearchForm handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} />
        <Book book={this.state.book} handleSaveBook={this.handleSaveBook}/>
      </>
    )
  }
}

export default Search
