const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:2710/mywebstore',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

