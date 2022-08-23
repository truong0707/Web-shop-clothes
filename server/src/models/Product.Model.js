const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    categoty: {
        type: Array,
    },
    size: {
        type: Array,
        required: true,
    },
    color: {
        type: Array,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        default: true,
    },
    type: {
        type: String,
        default: 'normal'
    }
},
    {
        timestamps: true
    }
)

const Product = mongoose.model("product", ProductSchema);

module.exports = {
    Product,
}