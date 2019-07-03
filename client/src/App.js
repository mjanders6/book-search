import React, { Component } from 'react';
import Search from '../src/components/Search'
import Book from '../src/components/Books'
import Axios from 'axios'

class App extends Component {

  state = {
    bookSearch: '',
    book: []
  }

  handleInputChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    Axios.get(`https://www.googleapis.com/books/v1/volumes`)
      .then(({ data: { items } }) => {
        let book = []
        items.forEach(bookItem => {
          let bookCollection = {
            title: bookItem.volumeInfo.title,
            authors: bookItem.volumeInfo.authors,
            description: bookItem.volumeInfo.description,
            image: bookItem.volumeInfo.imageLinks.thumbnail,
            link: bookItem.volumeInfo.infoLink
          }
          book.push(bookCollection)
        })
        console.log(book)
        
      })
      .catch(e => console.error(e))
  }

  render() {
    return (
      <>
        <Search 
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />

        <Book book={this.state.book}/>

      </>
    )
  }
}

export default App;
