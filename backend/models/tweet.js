const mongoose = require('mongoose')
const tweetEsquema = mongoose.Schema({
    descripcion: {
        type: String,
        required: true,
    },
    titular: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuario',
        required: true
    }
}, { timestamps: true })

const Tweet = mongoose.model('tweet', tweetEsquema)
module.exports = Tweet;
