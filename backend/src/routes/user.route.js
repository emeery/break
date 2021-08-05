const express = require('express')
const auth = require('../middleware/auth')
const {  signup, signin, me, logout } = require('../controllers/user.controller')
const router = express.Router()
router.post("/signup", signup)
router.post("/signin", signin)
router.get("/me",auth, me)
router.post("/logout",auth, logout)
module.exports = router
