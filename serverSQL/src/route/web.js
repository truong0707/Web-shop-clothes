const express = require('express');
const Test = require('../controller/Test.controller');

let router = express.Router() // sử dụng thằng Router của express

const initWebRoute = (app) => {
    router.get('/test', Test.getTest);

    return  app.use('/api/v1', router) // tham số đầu tiên chính là tiền tố mà ta muốn thêm vào "http://localhost:8080/truong/about"
}

module.exports = initWebRoute;