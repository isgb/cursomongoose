require('./connection')

const Product = require('./models/Product')

const main = async () => {

    const product = new Product({
        name: 'keyboard',
        description: 'Coursair k68 RGB Gaming keyboard',
        price: 150
    })
    
    const productSaved = await product.save();
    // console.log(productSaved)
    return productSaved
}

main()
 .then((productSaved) => {
    console.log(productSaved)
 })
 .catch((err) => console.log(err))