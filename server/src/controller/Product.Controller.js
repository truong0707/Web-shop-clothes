const { Product } = require('../models/Product.Model');


/* Create Product */
const postProduct = async (req, res) => {
    const { name, description, image, categoty, size, color, price, inStock, type } = req.body;

    if (!name) return res.status(400).json({ success: false, message: "Card must have name " });

    if (!name) {
        return res.status(400).json({ success: false, message: "Product must have name!" });
    } else if (!description) {
        return res.status(400).json({ success: false, message: "Product must have description!" });
    } else if (!image) {
        return res.status(400).json({ success: false, message: "Product must have image!" });
    } else if (!size) {
        return res.status(400).json({ success: false, message: "Product must have size!" });
    } else if (!price) {
        return res.status(400).json({ success: false, message: "Product must have price!" });
    } else if (!color) {
        return res.status(400).json({ success: false, message: "Product must have color!" });
    }

    try {
        const newProduct = new Product({
            name, description, image, categoty, size, color, price, inStock, type,
        });
        await newProduct.save(); // Lưu vào Data base
        res.json({ success: true, message: "Post Product Success", product: newProduct }); // post: CardProduct sử dụng bên gọi bên front
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "lỗi server" })
    }
}


/* Get all Product */
const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ success: "get product success", products });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "lỗi server" })
    }
}


/* get product detail */
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

        const productDetail = await Product.find({
            '_id': { $in: id }
        });

        return res.status(200).json({ success: "get product detail ok", productDetail });

    } catch (e) {
        console.log('create error:', e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}


//  get type product special (hàng trưng bày)
const getProductHome = async (req, res) => {
    const category = req.query.category;
    const type = req.query.type;
    const limit = req.query.limit;

    const products = await Product.find({
        'categoty': [category],
        'type': type
    }).limit(limit);

    return res.status(200).json({ success: "get ok!", products });
}

module.exports = {
    postProduct,
    getAllProduct,
    getProductById,
    getProductHome
}