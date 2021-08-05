const mongoose = require('mongoose')
const uri = 'mongodb+srv://'+process.env.USER+':'+process.env.MONGO_ATLAS+'@cluster0.1dgrd.mongodb.net/break?retryWrites=true&w=majority';
mongoose
    .connect(
      uri, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'break'
        },
        function(err) {
            if (err) {
                return console.dir(err);
            }
        })
