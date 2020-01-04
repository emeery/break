const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const Usuario = require('../models/user')
router.post('/signup', async(req, res) => {
    const h = await bcrypt.hash(req.body.contraseña, 10)
    try {
        const user = new Usuario({
            correo: req.body.correo,
            contraseña: h
        })
        await user.save()
        res.status(201).json({ mensaje: 'usuario creado!', user });
    } catch (e) { res.status(500).json({ e }) }
});
router.post('/login', async(req, res) => {
    try {
        const user = await Usuario.findCredencial(
                req.body.correo,
                req.body.contraseña
            ) //
        const token = await user.generaToken() //
            // console.log('to', token);
            // const decoded = await user.getUserId(token);
        res.status(200).json({
            token,
            // expiraEn: 3600,
            // userId: decoded
        });
    } catch (e) {
        res.status(401).json({ mensaje: 'credenciales invalidas' });
    }
});
module.exports = router