const mongoose = require("mongoose"); // use library mongoose
const Schema = mongoose.Schema; // use Schema of mongoose


// Mô hình hóa Referenced Relationship
const CategoryProductSchema = Schema({
    nameCategory: {
        type: String,
        required: true,
    },
    productHome: [
        { type: mongoose.Types.ObjectId, ref: "productHome" },
        {cc: {
            cc1: 'cc',
            cc2: 'cc'
        }} 
    ],
    productShop: [
        { type: mongoose.Types.ObjectId, ref: "productShop" },
    ]
});

const productHomeSchema = new Schema({
    nameProductHome: {
        type: String,
        required: true,
    }
});


const CategoryProduct = mongoose.model('ProductCategory', CategoryProductSchema);
const ProductHome = mongoose.model('ProductHome', productHomeSchema);


module.exports = {
    CategoryProduct,
    ProductHome
};