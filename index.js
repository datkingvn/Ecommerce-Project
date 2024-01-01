const express = require('express')
const database = require('./config/database')
const systemConfig = require('./config/system')
require('dotenv').config()

const routeAdmin = require('./routes/admin/index.route')
const route = require('./routes/client/index.route')

database.connect()

const app = express()
const port = process.env.PORT || 8888


app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static('public'))

// App Locals Variables
app.locals.prefixAdmin = systemConfig.prefixAdmin

// Route
routeAdmin(app)
route(app)


app.listen(port, () => {
    console.log(`App running on port ${port}`)
})