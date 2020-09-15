const { DonorService } = require('../service/donor.service');

/**
 * Donor controller
 */

const DonorController = {
  /** */
  addUserController: async (req, res) => {
    try {
      const category = await DonorService.addCategoryService(
        req.body.userId,
        req.body.categories
      );
      return res.status(201).json(category);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  /** */
  donate: async (req, res) => {
    try {
      const { userEmail, price, campaignId } = req.body;
      const data = DonorService.donate(campaignId, userEmail, price);
      return res.status(201).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};

exports.DonorController = DonorController;
