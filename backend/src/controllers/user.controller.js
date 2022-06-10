const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


// @route POST auth/signin
// @desc Autentica un usuario
// @access PUBLIC
exports.signin= async(req, res) => {
  const date = new Date()
  try {
    const token = jwt.sign({ date: date},"just_a_key")
      res.status(200).json({
          token,
      })
  } catch (e) { 
      res.status(401).json({ msg: 'hubo error' })
  }
}
exports.me = async(req,res) => {
 try {
  res.json({
    hello:'hola'
})
 } catch (error) {
   
 }
}

