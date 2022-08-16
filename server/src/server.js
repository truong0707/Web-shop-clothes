const express = require('express');
const mongoose = require('mongoose');
const configViewEngine = require('./configs/viewsEngine'); // sử dụng configviewEngine
const ImportData = require('./DataImport'); 
require('dotenv').config(); // sử dụng dotenv

const initWebRoute = require('./route/web');
const initUserRoutes = require('./route/UserRoutes');

const app = express(); // khởi tạo app từ express
const port = process.env.PORT; // sử dụng PORT ở file .env

var cors = require('cors') // cho phép sử dụng port
app.use(cors()) // Use thư viện cors để có thể gọi api từ bên front

const initApiTest = require('./route/TestRoutes');
const initApiCategoryProduct = require('./route/CategoryProduct.Routes');
/// kết nối mongoDB bằng mongose
;
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@shop-clothes0.mhzsj.mongodb.net/?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Mongoose connected");


    } catch (error) {
        console.error(error.message);
        process.exit(1); // mã lỗi
    }
}
connectDB();

app.use(express.json()); // use express json (khi post lên)
configViewEngine(app); // set up view engine (chính là express)

// import data user
app.use("/api/import", ImportData);

// router
initWebRoute(app) // gọi hàm initWebRote 
initUserRoutes(app)
initApiTest(app)
initApiCategoryProduct(app)




// lắng nghe port
app.listen(port, () => {
    console.log(`Lắng nge port ở http://localhost:${port}`)
})