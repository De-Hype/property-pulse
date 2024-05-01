const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        min:[6,'Password must be at least 4 characters'],
        required:true,
    },
    
}, {timestamps:true})
module.exports = mongoose.model('User', userSchema)