const mongoose = require('mongoose')
const uniqueV = require('mongoose-unique-validator')
const crypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const v = require('validator')
const usuarioEsquema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        minlength: 3
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    skills: {
        type: [String]
    },
    avatar: {
        type: String
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
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
    const user = await Usuario.findOne({
        correo
    })
    const match = await crypt.compare(pase, user.contraseña)
    if (!match) {
        throw new Error('no se pudo loguear')
    }
    return user;
}
usuarioEsquema.methods.generaToken = async function() {
    const user = this
    const token = jwt.sign({
                correo: user.correo,
                useride: user._id
            },
            'la_llave') // any { expiresIn: '1h' }
    user.tokens = user.tokens.concat({
        token
    })

    await user.save()
    return token
}

usuarioEsquema.virtual('tareap', {
    ref: 'tweet',
    localField: '_id',
    foreignField: 'titular'
})

usuarioEsquema.plugin(uniqueV)
const Usuario = mongoose.model('usuario', usuarioEsquema)
module.exports = Usuario;
