const mongoose = require('mongoose')
const uniqueV = require('mongoose-unique-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const usuarioEsquema = mongoose.Schema({
    correo: {
        type: String,
        required: true,
        unique: true
    },
    contraseña: {
        type: String,
        required: true,
    }
})
usuarioEsquema.statics.findCredencial = async(correo, pass) => {
    const user = await Usuario.findOne({ correo })
    const hacematch = await bcrypt.compare(pass, user.contraseña)
    if (!hacematch) { throw new Error('no se puede loguear') }
    return user
}

usuarioEsquema.methods.generaToken = async function() {
    const user = this
    const t = jwt.sign({ correo: user.correo, useride: user._id }, 'la_llave') // cualquier dto
    return t
}

usuarioEsquema.plugin(uniqueV)
const Usuario = mongoose.model('Usuario', usuarioEsquema)
module.exports = Usuario;