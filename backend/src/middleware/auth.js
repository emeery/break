const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const auth = async(req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, process.env.JWT)
        const user = await User.findOne({ _id: decoded.useride })
        if (!user)  throw new Error;
        req.userr = user
        next()
    } catch (error) {
        res.status(401).json({ msg: "Ingresa tus credenciales" })
    }
}
module.exports = auth
