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
        required:true,
    },
    property:{
        default:null,
        ref:'Property',
        type:[mongoose.Types.ObjectId],
        required:true
    }
})
module.exports = mongoose.model('User', userSchema)