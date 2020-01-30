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
            locacion: req.body.locacion,
            skills: req.body.skills,
            posicion: req.body.posicion,
            contraseña: h,
        })
        await user.save()
        res.status(201).json({ mensaje: 'usuario creado!', user });
    } catch (e) { res.status(500).json({ e }) }
});
router.get('/:_id', async(req, res) => {
    try {
        const u = await Usuario.findOne({ _id: req.params._id })
            // .populate('_id', ['nombre', 'posicion'])
        if (!u) {
            return res.status(400).json({ mensaje: 'No se encuentra el Perfil' })
        }
        res.send(u);
    } catch (error) {
        if (error.kind == 'ObjectId') {
            return res.status(400).json({ mensaje: 'No se encuentra el Perfil' })
        }
        res.status(500).send({ mensaje: 'Error Servidor' })
    }
});
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
        });
    } catch (error) {
        res.status(401).json({
            mensaje: 'vuelve a introducir tus datos'
        });
    }
});
router.get('', async(req, res) => {
    try {
        const users = await Usuario.find({})
        res.status(200).json({ mensaje: 'todos los usuarios', users })
    } catch (error) {

    }
});
router.delete('/:id', async(req, res) => {
    try {
        const u = await Usuario.findOneAndDelete({
            _id: req.params.id,
        })
        if (!u) {
            return res.status(404).json({
                mensaje: 'no autorizado'
            })
        }
        res.status(200).json({ mensaje: 'usuario eliminado' })
    } catch (e) { res.status(500).send() }
});

module.exports = router
