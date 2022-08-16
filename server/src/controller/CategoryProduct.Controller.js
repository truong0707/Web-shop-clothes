const { CategoryProduct, ProductHome } = require('../models/CategoryProduct.Model');
const mongoose = require('mongoose');
const toId = mongoose.Types.ObjectId;


// create category product
const createCategoryProduct = async (req, res) => {
    try {
        const { nameCategory } = req.body;
        if (!nameCategory) {
            return res.status(400).json({
                errCode: 1,
                errMessage: 'Category Product phải có tên!',
                data: {}
            })

        };

        const FakeCategoryProduct = {
            nameCategory: nameCategory,
        }
        // create a new category product
        const newCategoryProduct = await CategoryProduct.create(FakeCategoryProduct)
        return res.json({ success: 'Tạo category thành công!', newCategoryProduct })

    } catch (e) {
        console.log(error);
        res.status(500).json({ success: false, message: "lỗi server... Cần nhập trường thông tin bắt buộc!" });

        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}


// Create product Home
const createProductHome = async (req, res) => {

    try {
        const { nameProductHome } = req.body;

        const newProductHome = [
            { nameProductHome: nameProductHome },
        ]

        const assignOjbID = await ProductHome.create(newProductHome).then(async (data) => {
            const idProductHome = toId(data[0]);
            const idCategoryProduct = toId('62f9fb3583f9c6a2e1ebf073');

            const merge = await CategoryProduct.findOne(idCategoryProduct).exec(function (err, productCategory) {
                if (err) return handleError(err);
                productCategory.productHome = [...productCategory.productHome, idProductHome];
                productCategory.save()

                return res.status(200).json({ message: 'Tạo product home thành công!' });
            });
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "lỗi server... Cần nhập các trường thông tin bắt buộc!" });
    }

    console.log("working create productHome done!");
}

// get tất cả productHome trong CategoryProduct
const getProductHome = async (req, res) => {
    const productHomesInCategorry = await CategoryProduct.find({}).populate({ path: 'productHome', model: 'ProductHome' });
    res.status(200).json(productHomesInCategorry[0]);

    // const result = await CategoryProduct.findOne(/* { "name": "Tom Benzamin" }, */ { "productHome": toId('62f99fc638febd24f731083b') })
    // const addresses = await ProductHome.find({ "_id": { "$in": result["productHome"] } })
    // console.log(result);
    // console.log(addresses);
}


const getProductHomeByID = async (req, res) => {
    try {
        const id = req.query.id;

    } catch (e) {
        console.log('create error:', e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

module.exports = {
    createCategoryProduct,
    createProductHome,
    getProductHome,
    getProductHomeByID
}