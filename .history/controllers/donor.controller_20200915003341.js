const {addCategoryService} = require('../service/donor.service');


/**
 * Donor controller
 */

  exports.addCategory =  async (req,res) =>{
        const category = await addCategoryService(req.body.userId, req.body.categoryName);
        return res.status(200).json(category);


  }

