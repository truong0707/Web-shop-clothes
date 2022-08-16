const express = require('express');
const ProductCategoryController = require('../controller/CategoryProduct.Controller');
const router = express.Router();

const initApiCategoryProduct = (app) => {
    router.post('/create-category', ProductCategoryController.createCategoryProduct);
    router.post('/create-product-home', ProductCategoryController.createProductHome);
    router.get('/product-home', ProductCategoryController.getProductHome);
    router.get('/product-home/products_by_id', ProductCategoryController.getProductHomeByID);

    return app.use('/api/v1/', router);
}

module.exports = initApiCategoryProduct;