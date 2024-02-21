require('../connection')

const User = require('../models/User')

const someFunction = async () => {
    const user = await User.findOne({username: 'joe'});
    console.log(user)
    user.password = 'minuevacontraseña';
    user.save();
}

const otherFunction = async () => {
    const user = await User.findOneAndUpdate({username: 'clarck'}, {
        name: 'Gordon Clark'
    }, {new: true})

    console.log(user)
}

async function updateUsers() {
    const user = await User.findOneAndUpdate({username : 'fazt'},{
        password: 'contraseñasegura'
    });
    console.log(user)
}

otherFunction();

// https://www.youtube.com/watch?v=gfP3aqV38q4&t=14s
// 1:00:51 / 1:14:37