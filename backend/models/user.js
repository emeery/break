const mongoose = require('mongoose')
const uniqueV = require('mongoose-unique-validator')
const bcrypt = require('bcryptjs')
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
    // tokens: [{
    //     token: { type: String, required: true }
    // }],
    // edad
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
usuarioEsquema.statics.findCredencial = async(correo, pass) => {
    // console.log('co', correo);
    const user = await User.findOne({ correo })
    console.log('usrr', user)
    const esV = await crypt.compare(pase, user.contraseña)
    if (!esV) { throw new Error('no se pudo loguear') }

    // const user = await Usuario.findOne({ correo })
    // console.log('ussrr', user);
    // if (!user) {
    //     return res.status(401).json({
    //         mensaje: 'no estas autenticado'
    //     });
    // }
    return user;
    // const hacematch = await bcrypt.compare(pass, user.contraseña)
    // if (!hacematch) { throw new Error('no se puede loguear') }
    // return user
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

usuarioEsquema.plugin(uniqueV)
const Usuario = mongoose.model('Usuario', usuarioEsquema)
module.exports = Usuario;