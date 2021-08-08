const express = require('express')
const auth = require('../middleware/auth')
const {  create, ts } = require('../controllers/tweet.controller')
const router = express.Router()
router.post("/create", auth, create)
router.get("/ts", auth, ts)
module.exports = router
