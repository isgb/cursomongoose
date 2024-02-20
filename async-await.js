require('./connection')

const Product = require('./models/Product')

const main = async () => {

    const product = new Product({
        name: 'keyboard',
        description: 'Coursair k68 RGB Gaming keyboard',
        price: 150
    })
    
    const productSave = await product.save();
    console.log(productSave)
}

main();