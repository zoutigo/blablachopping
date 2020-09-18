var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
    name: {
        type: String
    },
    firstname: {
        type: String
    },
    pseudo: {
        type: String
    },
    dateOfBirth: {
        type: Date
    },
    picture : {
        type: mongoose.SchemaTypes.ObjectId
    },
    password : {
        type: String
    },
    wallet: {
        type: Number
    },
    createdAt : {
        type: Date
    },
    modificationsDates : [],
    purchases : []

    
})

module.exports = mongoose.model('User', userSchema)