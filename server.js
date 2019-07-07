require('dotenv').config()
const { join } = require('path')
const express = require('express')
const app = express()
const mongoDB = process.env.MONGODB_URI || 'mongodb://localhost/googlebooks'

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes')(app)

require('mongoose').connect('mongodb://localhost/googlebooks', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
    .then(_ => app.listen(process.env.PORT || 3001))
    .catch(e => console.log(e))
