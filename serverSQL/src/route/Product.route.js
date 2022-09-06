const express = require('express');
const router = express.Router();
const ProductController = require('../controller/Product.controller')

const initProductRoute = (app) => {
    router.post('/test2', ProductController.postProduct);
    router.get('/test2', ProductController.getAllProduct)

    return app.use('/api/v1', router);
}

module.exports = initProductRoute;

