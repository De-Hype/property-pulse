
const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name not provided'],
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
        required:[true,'Address not provided'],
        unique:  [true,'Address already exist'],
    },
    location:{
        type:String,
        required:true,
    },
    type:{
        enum:{values:['School', 'House', 'Destination'],
        message:`$Does not match either of school, house or destination`
    }
    },
    price:{
        type:number,
        required:true,
    },
    poster:{
        ref:'user',
        type:mongoose.Types.ObjectId,
        required:[true, "No product poster provided"]
        //this will make a reference to this poster
    }
}, {timestamps})

module.exports = mongoose.model('property', propertySchema)