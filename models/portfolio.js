const mongoose = require('mongoose')

const PortfolioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    mobileView: {
        type: String,
        required: true
    },
    desktopView: {
        type: String,
        required: true
    },
    toolsUsed: 
        [{type: String}],
    link: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Portfolio', PortfolioSchema)