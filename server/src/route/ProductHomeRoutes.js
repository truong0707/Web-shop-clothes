const express = require('express') // use library express 
const CardProductController = require('../controller/ProductsHomeController');

let router = express.Router(); 

const initApiCardProduct = (app) => {
    router.post('/card-products', CardProductController.postAllProductCards);
    router.get('/card-products', CardProductController.getAllProductCards);
    router.get('/card-product/products_by_id', CardProductController.getProductById);


    return app.use('/api/v1/', router)
}

module.exports = initApiCardProduct;