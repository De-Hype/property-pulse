
const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name not provided'],
        unique:true
    },
    imageUrls:{
        [type:String,
            required:[true,'Image url not provided'],
            unique:true],
    },
    rooms:{
        type:Number,
       // default willl be 1
    },
    bathrooms:{
        type:Number
       // default willl be 1
    },

    address:{
        type:String,
        required:[true,'Address not provided'],
        unique:  [true,'Address already exist'],
    },
    location:{
        type:String,
        required:[true,'Location must be provided'],
    },
    type:{
        type:String,
        enum:{values:['School', 'House', 'Destination'],
        message:`{VALUE}Does not match either of school, house or destination`,
    }
    },
    price:{
        type:Number,
        required:true,
    },
    poster:{
        ref:'User',
        type:mongoose.Types.ObjectId,
        required:[true, "No product poster provided"]
        //this will make a reference to this poster
    }
}, {timestamps:true})

module.exports = mongoose.model('Property', propertySchema)