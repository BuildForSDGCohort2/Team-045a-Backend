const Category = require('../models/category')
const User = require('../models/user')

exports.addUserCategoryService =  async (userId, categories) =>{

    if(!userId) throw Error('User Id is required');
    const user = await User.findOne({id:userId});
    if(!user) throw Error("User not found");
       user.category= [...categories];
        await user.save();
        return user;
}