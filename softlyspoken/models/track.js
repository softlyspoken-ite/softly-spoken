const mongoose = require('mongoose')
const trackSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    musicID: {
        type: String
    },
    userMusic: {
        type: String
    }
})

const Track = new mongoose.model('Tusic',trackSchema)



module.exports = Track