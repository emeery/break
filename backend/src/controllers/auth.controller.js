const jwt = require('jsonwebtoken')

// @route POST auth/signin
// @desc Autentica un usuario
// @access PUBLIC
exports.signin= async(req, res) => {
  const email = req.body.email
  const date = new Date()
  try {
    const token = jwt.sign({ date: date},"just_a_key")
      res.status(200).json({
          email,
          token
      })
  } catch (e) { 
      res.status(401).json({ msg: 'hubo un error' })
  }
}


