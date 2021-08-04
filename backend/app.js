const express = require('express')
require('./src/db/db')

const userRouter = require('./src/routes/user.route')

var app = express()

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

app.listen(process.env.PORT, function () {
    console.log('up')
    console.log(process.env.PORT)

});
