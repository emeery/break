const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const auth = async(req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, process.env.KEY)
        const user = await User.findOne({ _id: decoded.useride, 'tokens.token':token })
        if (!user)  throw new Error;
        req.userr = user;
        req.tokenn = token
        next()
    } catch (error) {
        res.status(401).json({ msg: "Enter your credentials" })
    }
}
module.exports = auth
