const express = require('express');
const ProductsBlogController = require('../controller/ProductsBlogController'); 

let router = express.Router();

const iniApiCardBlog = (app) => {
    router.get('/product-blog', ProductsBlogController.getAllProductsBlog)
    router.post('/product-blog', ProductsBlogController.postProductBlog)
    router.get('/product-detail-Blog', ProductsBlogController.getProductByName)
    return app.use('/api/v1/', router)
}

module.exports = iniApiCardBlog;