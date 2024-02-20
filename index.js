require('./connection');

const Product = require('./models/Product');

const product = new Product({
    name: 'laptop',
    description: 'lenovo thinkpad x1 carban 6th generation',
    price: 1300.99
})

product.save()
    .then((document) => {
        console.log(document)
    })
    .catch((err) => console.log(err))

// console.log(product)
// show collections