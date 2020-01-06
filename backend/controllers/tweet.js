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
router.get('', async(req, res) => {
    try {
        const tweets = await Tweet.find({})
        res.status(200).json({
            mensaje: 'todos los tweets',
            tweets
        });
    } catch (e) { res.status(500).send() }
});
router.delete('/:id', async(req, res) => {
    try {
        const t = await Tweet.findOneAndDelete({
            _id: req.params.id,
        })
        if (!t) {
            return res.status(404).json({
                mensaje: 'no autorizado'
            })
        }
        res.status(200).json({ mensaje: 'perfil eliminado' })
    } catch (e) { res.status(500).send() }
});
module.exports = router