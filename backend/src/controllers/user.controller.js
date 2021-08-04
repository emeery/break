const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
exports.signup = async(req, res) => {
    const encrypted_password = await bcrypt.hash(req.body.password, 10)
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: encrypted_password,
        })
        await user.save()
        res.status(201).json({msg:'user created', user})
    } catch (e) {
        res.status(400).json({error: e})
    }
}
