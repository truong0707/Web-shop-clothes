const express = require('express');
const router = express.Router();
const ProductController = require('../controller/Product.Controller');

const initProductApi = (app) => {
    router.post('/product', ProductController.postProduct);
    router.get('/product', ProductController.getAllProduct);
    router.get('/product-detail/product_by_id', ProductController.getProductById);
    router.get('/product-home', ProductController.getProductHome);

    return app.use('/api/v1/', router);
}

module.exports = initProductApi;