const mongoose = require('mongoose');

const {Schema} = mongoose;


const donorSchema = new mongoose.Schema({

    price: {
        type: Number,
        min: 0,
        require: [true, "The amount is required"]
    },
    userEmail: {
        type: String,
        trim:true,
        required:[true,"Donor email is required"]
    },
    campaign: {
        type: Schema.Types.ObjectId,
        ref: 'Campaign'
    }
});

module.exports = mongoose.model('Donor', donorSchema);