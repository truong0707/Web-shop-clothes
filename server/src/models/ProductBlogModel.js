const monggose = require("mongoose"); // use library mongoose
const Schema = monggose.Schema; // use Schema of mongoose

// init Schema CardProduct
const ProductBlog = Schema({
    nameProduct: {
        type: String,
        require: true,
    },
    imgProduct: {
        type: String,
        require: true,
        trim: true,
    },
    descriptionProduct: {
        type: String,
        require: true,
    },
    date: {

    },
    like: {
        type: Number,
    },
    comment: {

    },
    vote: {

    }
});

module.exports = monggose.model('productsBlog', ProductBlog);
