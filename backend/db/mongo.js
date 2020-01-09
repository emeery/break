const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://emery:05xIIYLOc6UOjH9h@cluster0-l8vui.mongodb.net/test?retryWrites=true', { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if (err) { return console.dir(err); }
})
