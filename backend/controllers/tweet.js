const express = require('express')
const Tweet = require('../models/tweet')
const aut = require('../middleware/aut')
    // const multer = require('multer')
const router = express.Router()
router.post('', aut, async(req, res) => {
    const tweet = new Tweet({
        descripcion: req.body.descripcion,
        titular: req.userr._id
    })
    try {
        await tweet.save()
        res.status(201).json({
            mensaje: 'tweet agregado',
            tweet: {
                id: tweet._id,
                descripcion: tweet.descripcion,
                titular: tweet.titular
            }
        })
    } catch (e) { res.status(400).send(e) }
});
router.get('', aut, async(req, res) => {
    try {
        const tweets = await Tweet.find({})
        res.status(200).json({
            mensaje: "todos los tweets",
            tweets,
        })
    } catch (e) { res.status(500).send() }
});

router.get('/ts', aut, async(req, res) => {
  try {
      await req.userr.populate('tareap').execPopulate()
      res.status(200).json({
        mensaje: "tus tweets",
        tweets: req.userr.tareap,
        // totalPerfiles: total
    })
  } catch (e) { console.log('e',e); res.status(500).send() }
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
        await Tweet.updateOne({ _id: req.params.id }, newTweet);
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
