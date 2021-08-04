const express = require("express")
const {  signup} = require('../controllers/user.controller')
const router = express.Router()

router.get("/signup", signup)
module.exports = router
