const mongoose = require('mongoose')
const tweetEsquema = mongoose.Schema({
    descripcion: {
        type: String,
        required: true,
    },
    titular: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
}, { timestamps: true })

const Tweet = mongoose.model('Tweet', tweetEsquema)
module.exports = Tweet;