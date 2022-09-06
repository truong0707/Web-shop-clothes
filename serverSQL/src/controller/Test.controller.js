const db = require('../models/index');
const CRUDService = require('../services/ProductServices')

const getTest = async (req, res) => {
    // try {
    //     const data = await db.User.findAll();

    //     res.json(data)
    // } catch (error) {
    //     console.log(error);
    // }

    await CRUDService.createNewUser(req.body);
    

}

module.exports = {
    getTest,
}