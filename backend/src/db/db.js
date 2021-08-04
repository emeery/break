const mongoose = require('mongoose')
const mongo_atlas = process.env.MONGO_ATLAS;
const uri = 'mongodb+srv://lucasummer:'+mongo_atlas+'@cluster0.1dgrd.mongodb.net/break?retryWrites=true&w=majority';
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
