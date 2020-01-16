const express = require('express')
const Tweet = require('../models/tweet')
const aut = require('../middleware/aut')
    // const multer = require('multer')
const router = express.Router()
router.post('', async(req, res) => {
    const tweet = new Tweet({
        descripcion: req.body.descripcion,
    })
    try {
        await tweet.save()
        res.status(201).json({
            mensaje: 'tweet agregado',
            tweet: {
                id: tweet._id,
                descripcion: tweet.descripcion,
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
router.get('/:id', async(req, res) => {
    try {
        const tweet = await Tweet.findById(req.params.id);
        if (tweet) { res.status(200).json(tweet) }
    } catch (e) { res.status(500).send() }
});
router.put('/:id', async(req, res) => {
    try {
        const newTweet = new Tweet({
            _id: req.body.id,
            descripcion: req.body.descripcion
        })
        const tt = await Tweet.updateOne({ _id: req.params.id }, newTweet);
        res.status(200).json({ mensaje: 'tweet actualizado' })
    } catch (error) {

    }
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
        res.status(200).json({ mensaje: 'tweet eliminado' })
    } catch (e) { res.status(500).send() }
});
module.exports = router
