const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const Usuario = require('../models/user')
const aut = require('../middleware/aut')
router.post('/signup', async(req, res) => {
    const h = await bcrypt.hash(req.body.contraseña, 10)
    try {
        const user = new Usuario({
            nombre: req.body.nombre,
            correo: req.body.correo,
            contraseña: h,
        })
        await user.save()
        res.status(201).json({ mensaje: 'usuario creado!', user });
    } catch (e) { res.status(500).json({ e }) }
});
// router.get('/me', aut, async(req, res) => {
//     res.send(req.userr);
// })
router.post('/login', async(req, res) => {
    try {
        const user = await Usuario.findCredencial(
            req.body.correo,
            req.body.contraseña
        )
        console.log('e', user);
        const token = await user.generaToken()
        console.log('tk', token);
        // const decoded = await user.getUserId(token);
        res.status(200).json({
            user,
            token,
            // expiraEn: 3600,
            // userId: decoded
        });
    } catch (error) {
        console.log('e', error);
        res.status(401).json({ mensaje: error });
    }
});
router.get('', async(req, res) => {
    try {
        const users = await Usuario.find({})
        res.status(200).json({ mensaje: 'todos los users', users })
    } catch (error) {

    }
});

module.exports = router