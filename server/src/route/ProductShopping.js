const { Router } = require("express")
const ProductsShoppingController = require("../controller/ProductsShoppingController");

let router = Router();
const initCardProductShop = (app) => {
    router.post('/products', ProductsShoppingController.postAllProductShopping);
    router.get('/products', ProductsShoppingController.getAllProductShopping);

    return app.use('/api/v1', router)
}

module.exports = initCardProductShop;