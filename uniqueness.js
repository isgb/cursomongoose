require('./connection')

const User = require('./models/User');

async function createUsers() {
    const userOne = new User({
        username: 'dona',
        password: '12345'
    })

    const userTwo = new User({
        username: 'cameron',
        password: 'securepassword'
    })
    
    await userOne.save();
    await userTwo.save();
}

createUsers();