const ProductShoppingModel = require("../models/ProductsShoppingModel");


// Get products
const getAllProductShopping = async (req, res) => {
    try {
        const productCards = await ProductShoppingModel.find();
        res.status(200).json({ success: "get products ok", productCards });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "lỗi server" })
    }
}

// Post product
const postAllProductShopping = async (req, res) => {
    const { nameProduct, imgProduct, descriptionProduct, PriceProduct, vote, resources, quantity, inputDate} = req.body;

    if(!nameProduct) return res.status(400).json({ success: false, message: "Name Product must require!" });
    try {
        const newProductShoping = new ProductShoppingModel({
            nameProduct,
            imgProduct,
            descriptionProduct,
            PriceProduct,
            vote,
            resources,
            quantity,
            inputDate
        });
        await newProductShoping.save();
        res.json({ success: true, message: "Post Product success!", post: newProductShoping }); // post: CardProduct sử dụng bên gọi bên front
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "lỗi server" })
    }
}

module.exports = {
    postAllProductShopping,
    getAllProductShopping
}