const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/mywebstore";
const db = mongoose.connection;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .catch((error) => {
        console.log(error);
    })

// escuchar eventos
db.on('open', _ => {
    console.log('Batabase is connected to',uri)
})

db.on('error', error => {
    console.log(error)
})

// https://www.youtube.com/watch?v=gfP3aqV38q4&t=14s
// 17:43