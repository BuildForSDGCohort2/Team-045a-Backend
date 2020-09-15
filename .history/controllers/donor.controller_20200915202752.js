const {DonorService} = require('../service/donor.service');


/**
 * Donor controller
 */

const DonorController = {

    addUserController :  async (req,res) =>{
        const category = await DonorService.addCategoryService(req.body.userId, req.body.categoryName);
        return res.status(200).json(category);


  }
}

  
exports.DonorController = DonorController;
