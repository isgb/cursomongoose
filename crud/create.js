require('../connection')

const Product = require('../models/Product')

async function createProducts() {
    
    const laptopOne = new Product({
        name: 'laptop hp',
        description: 'htp pavilion 15'
    })
    await laptopOne.save();

    const laptopOnTwo = new Product({
        name: 'laptop lenovo',
        description: 'lenovi x1'
    })
    await laptopOnTwo.save();
}

createProducts();