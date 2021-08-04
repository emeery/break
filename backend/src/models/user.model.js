const mongoose = require("mongoose")
const v = require("validator")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')
const uniquev = require('mongoose-unique-validator')
const userSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true, minlegth: 3 },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate(c) {
      if (!v.isEmail(c)) {
        throw new Error("invalid email");
      }
    },
  },
  password: { type: String, required: true, trim: true, minlegth: 5 },
  tokens: [{
    token: {
        type: String,
        required: true
    }
}],
})
userSchema.statics.findCredential = async(email, password) => {
  const user = await User.findOne({
      email
  })
  const match = await bcrypt.compare(password, user.password)
  if (!match) {
      throw new Error('no se pudo loguear')
  }
  return user;
}
userSchema.methods.generateToken = async function() {
  const user = this
  const token = jwt.sign({
              email: user.email,
              useride: user._id
          },
          process.env.KEY) // expiresIn:
  user.tokens = user.tokens.concat({
      token
  })
  await user.save()
  return token
}
userSchema.plugin(uniquev)
const User = mongoose.model("user", userSchema)
module.exports = User;
