const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const Usuario = require('../models/user')
router.post('/signup', async(req, res) => {
    const h = await bcrypt.hash(req.body.contraseña, 10)
    try {
        const user = new Usuario({
            correo: req.body.correo,
            contraseña: h,
            nombre: req.body.nombre
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
        )
        const token = await user.generaToken()
            // const decoded = await user.getUserId(token);
        res.status(200).json({
            token,
            user
            // expiraEn: 3600,
            // userId: decoded
        });
    } catch (e) {
        res.status(401).json({ mensaje: 'credenciales invalidas' });
    }
});
router.get('', async(req, res) => {
  try {
      const users = await Usuario.find({})
      res.status(200).json({
          mensaje: 'todos los usuarios',
          users
      });
  } catch (e) { res.status(500).send() }
});
module.exports = router
