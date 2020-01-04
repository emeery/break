const express = require('express')
const bodyparser = require('body-parser')
    // const path = require('path')
require('./db/mongo')

const tweetRouter = require('./controllers/tweet')
const userRouter = require('./controllers/user')
var app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

// app.get('/', (req, res) => res.send('api run'));
// app.use("/images", express.static(path.join(__dirname, "/images")))

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     res.setHeader(
//       "Access-Control-Allow-Methods",
//       "GET, POST, PATCH, PUT, DELETE, OPTIONS"
//     );
//     next();
// });


app.use('/tweet', tweetRouter)
app.use('/user', userRouter)

app.listen(8090, function() {
    console.log('servidor_up ...')
});