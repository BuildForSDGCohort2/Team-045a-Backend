const Category = require('../models/category')
const User = require('../models/user')

exports.addCategory =  (userId, category) =>{

    if(!userId) throw Error('User Id is required');
    User.findOne({id:userId},(err,user)=>{
        if(!user) throw Error("User not found");
        const userCategory = new Category({name : category.name, user});
         userCategory.save();
    });
  
}