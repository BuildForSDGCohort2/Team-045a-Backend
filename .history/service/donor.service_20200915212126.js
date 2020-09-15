const Campaign = require('../models/campaign');
const User = require('../models/user');
const Donor = require('../models/donor');

const DonorService = {
  /**
   * @summary Add category of user's interest
   * @param {string} userId
   * @param {Array<string>} categories
   */
  addUserCategory: async (userId, categories) => {
    if (!userId) throw Error('User Id is required');
    const user = await User.findById(userId).exec();
    if (!user) throw Error('User not found');
    user.category = [...categories];
    await user.save();
    return user;
  },
  /**
   * @summary donate to a campaign
   * @param {*} campaignId
   * @param {*} userId
   * @param {*} price
   */
  donate: async (campaignId, userEmail, price) => {
    const campaign = await Campaign.findById(campaignId).exec();
    if (!campaign)
      throw Error(`Campaign with the given id ${campaignId} is not found`);
    const donor = new Donor({ price, userEmail, campaign });

    const savedDonor = await donor.save();
    return savedDonor;
  },
};

module.exports = DonorService;