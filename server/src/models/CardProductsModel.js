const monggose = require("mongoose"); // use library mongoose
const Schema = monggose.Schema; // use Schema of mongoose

// init Schema CardProduct
const CardProduct = Schema({
    nameCard: {
        type: String,
        required: true,
    },
    imgCard: {
        type: String,
        required: true,
        trim: true,
    },
    descriptionCard: {
        type: String,
        required: true,
    },
    Price: {
        type: Number,
        required: true,
    },
    vote: {
        type: Number,
    },

},
    {
        timestamps: true
    }
);

module.exports = monggose.model('cardsProduct', CardProduct)
