const mongoose = require('mongoose')
const uniqueV = require('mongoose-unique-validator')
const crypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const v = require('validator')
const usuarioEsquema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        minlength: 3,
    },
    correo: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate(c) {
            if (!v.isEmail(c)) {
                throw new Error('correo invalido')
            }
        }

    },
    locacion: { type: String, required: true, minlength: 3 },
    bio: { type: String },
    skills: { type: [String] },
    fecha: { type: Date, default: Date.now },
    posicion: { type: String, required: true },
    contraseña: {
        type: String,
        required: true,
        minlength: 6,
        trim: true,
        validate(p) {
            if (p.toLowerCase().includes('contraseña')) {
                throw new Error('el pase no puede tener la palabra contraseña')
            }
        }
    }
})
usuarioEsquema.statics.findCredencial = async(correo, pase) => {
    const user = await Usuario.findOne({ correo })
    const match = await crypt.compare(pase, user.contraseña)
    if (!match) { throw new Error('no se pudo loguear') }
    return user;
}

usuarioEsquema.methods.generaToken = async function() {
    const user = this
    const token = jwt.sign({ correo: user.correo, useride: user._id },
            'la_llave', { expiresIn: '1h' }) // any
        // user.tokens = user.tokens.concat({ token })
        // await user.save()
    return token
}
usuarioEsquema.methods.toJSON = function() {
    const user = this
    userP = user.toObject()
    delete userP.contraseña
    delete userP.tokens
    return userP
}
usuarioEsquema.virtual('tweetp', {
        ref: 'Tweet',
        localField: '_id',
        foreignField: 'titular'
    })
    // experiencia: [{ array
    //     titulo: { type: String, required: true },
    //     compañia: { type: String, required: true },
    //     titulo: { type: String, required: true },
    //     from: { type: Date, required: true },
    //     to: { type: String },
    //     actualmente: { type: Boolean, default: false },
    //     descripcion: { type: String, required: true }
    // }],
    // social: { object
    //     youtube: { type: String },
    //     twitter: { type: String },
    //     linkedin: { type: String }
    // },
    // tokens: [{
    //     token: { type: String, required: true }
    // }],
    // edad
usuarioEsquema.plugin(uniqueV)
const Usuario = mongoose.model('Usuario', usuarioEsquema)
module.exports = Usuario;
