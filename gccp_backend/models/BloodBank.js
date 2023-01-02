const mongoose = require('mongoose');

const bloodBankSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

const BloodBank = mongoose.model('BloodBank', bloodBankSchema);

module.exports = BloodBank;
