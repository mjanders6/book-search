const { Book } = require('../models')
const axios = require('axios')

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
}