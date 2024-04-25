const Joi = require('joi');

const validator =(schema)=>(payload)=> schema.validate(payload, {abortEarly:false});


const SignUpSchema = Joi.object({
    name:Joi.string().min(4).required(),
    email:Joi.string().email().required(),
    username:Joi.string().min(7).required(),
    password:Joi.string().min(6).max(30).required(),
})

const SignInSchema = Joi.object({
    name:Joi.string().min(4).required(),
    password:Joi.string().min(6).max(30).required(),
})

const CreateListingSchema = Joi.object({ 
    name:Joi.string().min(7).required(),
    description:Joi.string().min(15).required(), 
    address:Joi.string().min(15).required(), 
    firebase_url:Joi.string().required(),
    property_type:Joi.string().required(),
    type:Joi.string().required(),
    price:Joi.number().min(15).required(),
    years:Joi.number().required(),
})
const UpdateListingSchema = Joi.object({ 
    name:Joi.string().min(7).required(),
    description:Joi.string().min(15).required(), 
    address:Joi.string().min(15).required(), 
    property_type:Joi.string().required(),
    type:Joi.string().required(),
    price:Joi.number().min(15).required(),
    years:Joi.number().required(),
})


exports.ValidateSignUp= validator(SignUpSchema);
exports.ValidateSignIn = validator(SignInSchema);
exports.ValidateCreateListingSchema = validator(CreateListingSchema)
exports.ValidateUpdateListingSchema = validator(UpdateListingSchema)