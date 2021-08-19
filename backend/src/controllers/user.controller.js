const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
exports.signup= async(req, res) => {
  const encrypted_password = await bcrypt.hash(req.body.password, 10)
  try {
      const user = new User({
          name: req.body.name,
          email: req.body.email,
          password: encrypted_password,
      })
      await user.save()
      res.status(201).json({msg:'usuario creado', user})
  } catch (e) {
      res.status(400).json({msg: 'no se pudo registrar'})
  }
}
exports.signin= async(req, res) => {
  try {
      const user = await User.findCredential(
          req.body.email,
          req.body.password
      )
      const token = await user.generateToken()
      const userId = await user.getUserId(token);
      res.status(200).json({
          user,
          token,
          userId
      })
  } catch (e) {
      res.status(401).json({ msg: 'verifica tus credenciales' })
  }
}
exports.me= async(req, res) => {
  res.send(req.userr);
}
exports.logout= async(req, res) => {
  try {
    req.userr.tokens = req.userr.tokens.filter(t => {
        return t.token !== req.tokenn
    })
    await req.userr.save()
    res.json(req.userr)
} catch (e) { res.status(500).send(e) }
}
