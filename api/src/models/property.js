
const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    rooms:{
        type:number,
       // default willl be 1
    },
    bathrooms:{
        type:number,
       // default willl be 1
    },

    address:{
        type:String,
        required:true,
        unique:true
    },
    location:{
        type:String,
        required:true,
    },
    type:{
        enum:['School', 'House', 'Destination']
    },
    price:{
        type:number,
        required:true,
    },
    poster:{
        required:true,
        //this will make a reference to this poster
    }
}, {timestamps})