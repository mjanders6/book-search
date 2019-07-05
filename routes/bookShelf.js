const { Book } = require('../models')

module.exports = app => {
    app.get('/books', (req, res) => {
        Book.find({})
            .then(books => res.json(books))
            .catch(e => console.log(e))
    })
    app.post('/books', (req, res) => {
        Book.create(req.body)
            .then(res.sendStatus(200))
            .catch(e => console.error(e))
    })
    app.delete('/books/:id', (req, res) => {
        Book.findByIdAndDelete(req.params.id)
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
}