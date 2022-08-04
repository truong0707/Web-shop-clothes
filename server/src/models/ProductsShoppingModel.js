const monggose = require("mongoose"); // use library mongoose
const Schema = monggose.Schema; // use Schema of mongoose

// init Schema CProduct
const ProductShopping = Schema({
    nameProduct: {
        type: String,
        required: true,
    },
    imgProduct: {
        type: String,
        required: true,
        trim: true,
    },
    descriptionProduct: {
        type: String,
        required: true,
    },
    PriceProduct: {
        type: Number,
        required: true,
    },
    vote: {
        type: Number,
    },
    resources: {
        type: String,
    },
    quantity: {
        type: Number,
        required: true,
    },
    inputDate: {

    }
},
    {
        timestamps: true
    }
);

module.exports = monggose.model('productShopping', ProductShopping);
