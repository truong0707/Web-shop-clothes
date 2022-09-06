const { Products } = require("../models") 

/* post product  */
const postProduct = async (req, res) => {
    const product = req.body
    await Products.create(product);
    res.send(product);
    console.log('done!');
} 

/* get product */
const getAllProduct = async (req, res) => {
    const ListProduct = await Products.findAll();
    res.send(ListProduct);
} 

module.exports = {
    postProduct,
    getAllProduct
}