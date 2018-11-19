const mongoose = require('mongoose');

// User schema

const UserSchema = mongoose.Schema({
    admin:{
        type: String
    },    
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique : true
    },
    company:{
        type: String,
        required: true
    },
    site:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }


});


let User = module.exports = mongoose.model('User', UserSchema);