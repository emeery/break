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
            nombre: req.body.nombre
        })
        await user.save()
        res.status(201).json({ mensaje: 'usuario creado!', user });
    } catch (e) { res.status(500).json({ e }) }
});
router.get('/me', aut, async(req, res) => {
    res.send(req.userr);
})
router.post('/login', async(req, res) => {
    try {
        const user = await Usuario.findCredencial(
<<<<<<< HEAD
            req.body.correo,
            req.body.contraseña
        )
        const token = await user.generaToken()
        console.log('tk', token);
        // const decoded = await user.getUserId(token);
=======
                req.body.correo,
                req.body.contraseña
        )
        const token = await user.generaToken()
            // const decoded = await user.getUserId(token);
>>>>>>> 8ad7c6938a82c104a5a4aab55fe02537ac939cbb
        res.status(200).json({
            user,
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
<<<<<<< HEAD
    try {
        const users = await Usuario.find({})
        res.status(200).json({ mensaje: 'todos los users', users })
    } catch (error) {

    }
});
module.exports = router
=======
  try {
      const users = await Usuario.find({})
      res.status(200).json({
          mensaje: 'todos los usuarios',
          users
      });
  } catch (e) { res.status(500).send() }
});
module.exports = router
>>>>>>> 8ad7c6938a82c104a5a4aab55fe02537ac939cbb
