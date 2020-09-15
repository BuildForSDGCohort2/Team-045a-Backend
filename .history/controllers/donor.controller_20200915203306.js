const {DonorService} = require('../service/donor.service');


/**
 * Donor controller
 */

const DonorController = {

    addUserController :  async (req,res) =>{
        try {
            const category = await DonorService.addCategoryService(req.body.userId, req.body.categoryName);
            return res.status(200).json(category);
        } catch (error) {
            return res.status(400).json(error)
        }
       


  },

  donate: async (req,res) =>{
      const {userEmail,price,campaignId} = req.body;

  }
}

  
exports.DonorController = DonorController;
