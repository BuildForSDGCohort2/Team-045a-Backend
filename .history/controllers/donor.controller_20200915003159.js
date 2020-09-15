const {addCategory} = require('../service/donor.service');


/**
 * Donor controller
 */
const donorController = {
    addCategory : async (req,res) =>{
        const category = await addCategory(req.body.userId, req.body.categoryName);
        return res.status(200).json(category);
}




module.exports = donorController;