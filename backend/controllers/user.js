const express = require('express')
const bcrypt = require('bcryptjs')
const gravatar = require('gravatar');
const router = express.Router()
const Usuario = require('../models/user')
const aut = require('../middleware/aut')

// @route    POST user/signup
// @desc     Signup user
// @access   Public
router.post('/signup', async(req, res) => {
    const h = await bcrypt.hash(req.body.contraseña, 10)
    const avatar = gravatar.url(req.body.correo, {
        s: '200',
        r: 'pg',
        d: 'mm'
    });
    try {
        const user = new Usuario({
            nombre: req.body.nombre,
            correo: req.body.correo,
            skills: req.body.skills,
            avatar,
            contraseña: h
        })
        await user.save()
        res.status(201).json({ mensaje: 'usuario creado!', user });
    } catch (e) { res.status(500).json({ e }) }
});

// @route    POST user/login
// @desc     Login user
// @access   Public
router.post('/login', async(req, res) => {
    try {
        const user = await Usuario.findCredencial(
            req.body.correo,
            req.body.contraseña
        )
        const token = await user.generaToken()
        res.status(200).json({
            user,
            token,
        })
    } catch (e) {
        res.status(401).json({ mensaje: 'verifica tus datos' })
    }
})

// @route    GET user/me
// @desc     Get current user profile
// @access   Private
router.get('/me', aut, async(req, res) => {
    res.send(req.userr);
})

// @route    GET users
// @desc     Get all users
// @access   Private
router.get('', async(req, res) => {
    try {
        const users = await Usuario.find({})
        res.status(200).json({ mensaje: 'todos los usuarios', usuarios: users })
    } catch (e) { res.status(500).send() }
})

// @route    POST user/logout
// @desc     logout user
// @access   Private
router.post('/logout', aut, async(req, res) => {
    try {
        req.userr.tokens = req.userr.tokens.filter(t => {
            return t.token !== req.tokenn
        })
        await req.userr.save()
        res.json(req.userr)
    } catch (e) { res.status(500).send(e) }
})

// @route    DELETE user
// @desc     Remove current user
// @access   Private
router.delete('', aut, async(req, res) => {
    try {
        await req.userr.remove()
        res.json({
            mensaje: 'usuario eliminado',
            usuario: req.userr
        })
    } catch (e) {
        res.status(500).send(e)
    }
})
module.exports = router
