require('../connection')

const Product = require('../models/Product')

const someFunction = async () => {
    // await Product.deleteMany({name : 'keyboard'})
    // .then((result) => {
    //     console.log(result)
    // })
   
    // await Product.deleteOne({name : 'laptop hp'})
    // .then((result) => {
    //     console.log(result)
    // })

    // await Product.findOneAndDelete({name : 'laptop'})
    // .then((result) => {
    //     console.log(result)
    // })

    await Product.findByIdAndDelete('65d525354d3d0faf7fb6cdbc')
    .then((result) => {
        console.log(result)
    })
}

someFunction()