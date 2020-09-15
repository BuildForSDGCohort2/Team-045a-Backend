const Category = require('../models/category')
const User = require('../models/user')

exports.addCategory =  async (userId, categoryName) =>{

    if(!userId) throw Error('User Id is required');
    const user = await User.findOne({id:userId});
    if(!user) throw Error("User not found");
        const userCategory = new Category({name : categoryName, user});
        const category= await userCategory.save();

        return category;
}