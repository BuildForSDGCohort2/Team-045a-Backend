const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Category name is required']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'A category must belong to a user']
    }
});


const Category = mongoose.model('Category', categorySchema);

module.exports = Category;