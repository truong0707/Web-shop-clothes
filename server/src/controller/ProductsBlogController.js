const ProductBlogModel = require('../models/ProductBlogModel');

// get
let getAllProductsBlog = async (req, res) => {
    try {
        const productBlogs = await ProductBlogModel.find();
        res.status(200).json({ success: "get card ok", productBlogs });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "lỗi server" })
    }
}

// post
let postProductBlog = async (req, res) => {
    const { imgProduct, nameProduct, descriptionProduct, comment, like, date, vote } = req.body

    if (!nameProduct) return res.status(400).json({ success: false, message: "Card must have name " }); // ko thực thi đc thì do lỗi client
    try {
        const newProductBlog = new ProductBlogModel({
            nameProduct,
            imgProduct,
            descriptionProduct,
            vote,
            like,
            comment,
            date
        });
        await newProductBlog.save();
        res.json({ success: true, message: "ProductBlog đã đc post thành công", post: newProductBlog }); // post: CardProduct sử dụng bên gọi bên front
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "lỗi server" })
    }
}

// get product detail
const getProductByName = async (req, res) => {
    try {
        const name = req.query.id;
        if (!name) {
            return res.status(500).json({
                errCode: 1,
                errMessage: 'missing require parameter',
                data: {}
            })
        }
        const productDetailBlog = await ProductBlogModel.find({
            'nameProduct' : { $in: name }   
        });
        return res.status(200).json({ success: "get product detail ok", productDetailBlog });

    } catch (e) {
        console.log('create error:', e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
};

module.exports = {
    getAllProductsBlog,
    postProductBlog,
    getProductByName,
}