const express = require('express')
const bodyparser = require('body-parser')
    // const path = require('path')
require('./db/mongo')

const tweetRouter = require('./controllers/tweet')
const userRouter = require('./controllers/user')
const profileRouter = require('./controllers/profile')
var app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});
app.use('/profile', profileRouter)
app.use('/tweet', tweetRouter)
app.use('/user', userRouter)
module.exports = app;
// app.listen(8090, function() {
//     console.log('servidor_up ...')
// });
