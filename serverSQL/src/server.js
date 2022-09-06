const express = require('express');
// const configViewEngine = require('./configs/viewsEngine'); // sử dụng configviewEngine
require('dotenv').config(); // sử dụng dotenv
const initWebRoute = require('./route/web');

const app = express(); // khởi tạo app từ express
const port = process.env.PORT; // sử dụng PORT ở file .env

var cors = require('cors'); // cho phép sử dụng port
const connectDB = require('./config/connectDB');
const db = require('./models/index'); 
const initProductRoute = require('./route/Product.route');
app.use(cors()) // Use thư viện cors để có thể gọi api từ bên front

/// kết nối database
connectDB()

// tao table
db.sequelize.sync().then(() => { console.log('create all table success!') }) 

app.use(express.json()); // use express json (khi post lên)
// configViewEngine(app); // set up view engine (chính là express)

// router
initWebRoute(app); // gọi hàm initWebRote
initProductRoute(app) 

// lắng nghe port
app.listen(port, () => {
    console.log(`Lắng nge port ở http://localhost:${port}`)
})