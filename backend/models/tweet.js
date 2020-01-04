const mongoose = require('mongoose')
    // minusculas en la base - tarea
const Tweet = mongoose.model('Tweet', {
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    completado: {
        type: Boolean,
        default: false
    }
})
module.exports = Tweet