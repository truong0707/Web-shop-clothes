const express = require('express') // use library express 
const UserController = require('../controller/UserController');
const asyncHandler = require('express-async-handler');
const { protect } = require('../Middleware/AuthMiddleware')

let router = express.Router();

const initUserRoutes = (app) => {
    router.post('/login', asyncHandler(UserController.postUser));
    router.get('/user/profile', protect, asyncHandler(UserController.getProfile));
    router.post('/register', asyncHandler(UserController.postRegister));


    return app.use('/api/v1/', router)      
}

module.exports = initUserRoutes;