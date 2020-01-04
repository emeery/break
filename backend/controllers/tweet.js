const express = require('express')
const Tweet = require('../models/tweet')
    // const multer = require('multer')
    // const aut = require('../middleware/check-aut')
const router = express.Router()
router.post('', async(req, res) => {
    const tweet = new Tweet({
        descripcion: req.body.descripcion,
        completo: req.body.completo
    })
    try {
        await tweet.save()
        res.status(201).json({
            mensaje: "agregado correctamente",
            tweet: {
                id: tweet._id,
                descripcion: tweet.descripcion,
                completo: tweet.completo,
            }
        })
    } catch (e) { res.status(400).send(e) }
});
module.exports = router