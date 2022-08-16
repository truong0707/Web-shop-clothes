const express = require('express');
const router = express.Router();

const TestController = require('../controller/TestController')

const initApiTest = (app) => {
    router.get('/test', TestController.Test1);
    router.get('/test2/:dog/:owner', TestController.Test2);
    router.get('/test3', TestController.Test3);

    return app.use('/api/v1/', router)
}

module.exports = initApiTest;