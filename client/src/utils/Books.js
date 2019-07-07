import Axios from 'axios'

const Books = {
    getAllBooks: _ => Axios.get('/books'),
    saveBook: book => Axios.post('/books', book),
    deleteBook: (id) => Axios.delete(`/books/${id}`)
}

export default Books