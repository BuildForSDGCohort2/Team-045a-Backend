const  {DonorService}  = require('../service/donor.service');

/**
 * Donor controller
 */

const DonorController = {

  /** 
   * Add interested category
  */
  addUserController: async (req, res) => {
    try {
      const category = await DonorService.addUserCategory(
        req.body.userId,
        req.body.categories
      );
      return res.status(201).json(category);
    } catch (error) {
      console.log(error)
      return res.status(400).json(error);
    }
  },
  /**
   * @summary Donate endpoint to be called after payment gateway
   * 
   * 
   */
  donate: async (req, res) => {
    try {
      const { userEmail, price, campaignId } = req.body;
      const data = await DonorService.donate(campaignId, userEmail, price);
      return res.status(201).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};

exports.DonorController = DonorController;
