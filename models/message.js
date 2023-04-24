const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        minLength: 5
    },
    email: {
        type: String,
        require: [true, 'Please provide an email'],
        minLength: 8,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
          ]
    },
    message: {
        type: String,
        required: [true, 'Please provide a message'],
        minLength: 8
    }
})

module.exports = mongoose.model('Message', MessageSchema)