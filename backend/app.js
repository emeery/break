const express = require('express')
require('./src/db/db')
require('dotenv').config()

const userRouter = require('./src/routes/user.route')
const tweetRouter = require('./src/routes/tweet.route')
const app = express()

app.use(express.json())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE"
    );
    next();
});
app.use('/user', userRouter)
app.use('/tweet', tweetRouter)
app.listen(process.env.PORT);
