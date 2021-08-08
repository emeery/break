const mongoose = require('mongoose')
const tweetSchema = mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
}, { timestamps: true })

const Tweet = mongoose.model('tweets', tweetSchema)
module.exports = Tweet;
