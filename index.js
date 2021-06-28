const express = require('express')
const mongoose = require ('mongoose')


const app = express()


app.use(express.json())
app.set('view engine', 'ejs')

const db = 'mongodb://localhost/url-shortner'

mongoose
.connect(db, {

    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology : true
})
.then(() => console.log('database connected'))
.catch(err => console.log('database connection error :' +err))

app.use('/', require('./routes/url'))


app.listen(3000, () => console.log('server is running on port 3000'))