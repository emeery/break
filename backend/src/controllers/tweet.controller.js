const Tweet = require("../models/tweet.model");
exports.create = async (req, res) => {
  const tweet = new Tweet({
    description: req.body.description,
    owner: req.userr._id,
  })
  try {
    await tweet.save();
    res.status(201).json({
      msg: "tweet agregado",
      tweet: {
        id: tweet._id,
        description: tweet.description,
        owner: tweet.owner,
      },
    })
  } catch (e) {
    res.status(400).send(e);
  }
}
exports.ts = async(req, res) => {
  try {
    await req.userr.populate('tweetp').execPopulate()
    res.status(200).json({
      mge: "tus tweets",
      tweets: req.userr.tweetp,
  })
} catch (e) { res.status(500).send() }
}
