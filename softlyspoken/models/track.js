const mongoose = require('mongoose')
const trackSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    trackID: {
        type: String,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    userCreate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    
})


const Track = new mongoose.model('Music',trackSchema)




module.exports = Track