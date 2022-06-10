const mongoose = require('mongoose')
const uri = 'mongodb+srv://'+'lucasummer'+':'+'5c183uNHtp2Mn7PP'+'@cluster0.1dgrd.mongodb.net/break?retryWrites=true&w=majority';

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
