const mongoose = require('mongoose');
// const uri;
mongoose
    .connect(
        'mongodb+srv://emery:' + process.env.MONGO_ATLAS + '@cluster0-l8vui.mongodb.net/test?retryWrites=true', { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
        function(err) {
            if (err) { return console.dir(err); }
        })