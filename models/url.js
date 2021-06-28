const mongoose = require('mongoose')
const schema = mongoose.Schema


const urlschema = new schema({
    url : {
        type : String,
        required : true,
        unique : true


    },
    address : {
        type : String,
        required : true,
        unique : true
    }
})

module.exports = URL = mongoose.model('url', urlschema)