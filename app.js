// Requirements
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
require('./db')
const express = require('express');
const app = express();
// const expressEjsLayouts = require('express-ejs-layouts');
const appRouter = require('./controllers/routes')


// Middlewares
app.set('view engine', 'ejs')
// app.set('layout', 'layouts/layout')
// app.use(expressEjsLayouts)
app.use( '/public', express.static('public'))
app.use('/', appRouter)





// Listening port
app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running on port 5000...')
})