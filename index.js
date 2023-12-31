const express = require('express')
const database = require('./config/database')
require('dotenv').config()

const route = require('./routes/client/index.route')

database.connect()

const app = express()
const port = process.env.PORT || 8888


app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static('public'))

// Route
route(app)


app.listen(port, () => {
    console.log(`App running on port ${port}`)
})