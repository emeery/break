const mongoose = require("mongoose")
const v = require("validator")

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
})
const User = mongoose.model("User", userSchema)
module.exports = User;
