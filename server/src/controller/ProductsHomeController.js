const CardProductModel = require('../models/CardProductsModel');
const ProductsShoppingModel = require('../models/ProductsShoppingModel');


// get all product
let getAllProductCards = async (req, res) => {
    try {
        const productCards = await CardProductModel.find();
        res.status(200).json({ success: "get card ok", productCards });
        // res.status(200).json(productCards);

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "lỗi server" })
    }
}

// get product detail
const getProductById = async (req, res) => {
    try {
        const id = req.query.id;
        if (!id) {
            return res.status(500).json({
                errCode: 1,
                errMessage: 'missing require parameter',
                data: {}
            })
        }
        const productDetail = await CardProductModel.find({
            '_id' : { $in: id }   
        });

        return res.status(200).json({ success: "get product detail ok", productDetail });

    } catch (e) {
        console.log('create error:', e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
};


// post
let postAllProductCards = async (req, res) => {
    const { imgCard, nameCard, descriptionCard, Price, resources, vote } = req.body

    if (!nameCard) return res.status(400).json({ success: false, message: "Card must have name " });
    try {
        const newCardProduct = new CardProductModel({
            nameCard,
            imgCard,
            descriptionCard,
            Price,
            resources,
            vote,
        });
        await newCardProduct.save();
        res.json({ success: true, message: "CardProducts đã đc post thành công", post: newCardProduct }); // post: CardProduct sử dụng bên gọi bên front
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "lỗi server" })
    }
}

module.exports = {
    postAllProductCards,
    getAllProductCards,
    getProductById
}