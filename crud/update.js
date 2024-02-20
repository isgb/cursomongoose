require('../connection')

const User = require('../models/User')

async function updateUsers() {
    const user = await User.findOneAndUpdate({username : 'fazt'},{
        password: 'contraseñasegura'
    });
    console.log(user)
}

updateUsers();

// https://www.youtube.com/watch?v=gfP3aqV38q4&t=14s
// 1:00:51 / 1:14:37