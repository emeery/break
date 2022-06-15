const express = require('express')
const auth = require('../middleware/auth')
const {  signin } = require('../controllers/auth.controller')
const router = express.Router()
router.post("/signin", signin)
module.exports = router
