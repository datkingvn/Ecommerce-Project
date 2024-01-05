const express = require('express')
const database = require('./config/database')
const systemConfig = require('./config/system')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const flash = require('express-flash')
const cookieParser = require('cookie-parser')
const session = require('express-session')
require('dotenv').config()

const routeAdmin = require('./routes/admin/index.route')
const route = require('./routes/client/index.route')

database.connect()

const app = express()
const port = process.env.PORT || 8888


app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static('public'))
app.use(methodOverride('_method'))

// Express Flash
app.use(cookieParser('tranmanhdat'));
app.use(session({ cookie: { maxAge: 60000 }}));
app.use(flash());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// App Locals Variables
app.locals.prefixAdmin = systemConfig.prefixAdmin

// Route
routeAdmin(app)
route(app)


app.listen(port, () => {
    console.log(`App running on port ${port}`)
})