const mongoose = require("mongoose");
const validator = require("validator");

//CREATING SCHEMA //
const giftDataSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true, 
        minlength: 3,
    },
    imageUrl : {
        type: String,
        required: true, 
        unique: [true, " This image is already present"],
    },
    description : {
        type: String,
        required: true, 
    },
    category : {
        type: String,
        required: true, 
    },
    length : {
        type: String,
        required: true, 
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    isLiked:{
        type: Boolean,
        required: true
    }
});

 // CREATING MODELS //
 // WE WILL CREATE A NEW COLLECTIOON//
 const GiftData =new  mongoose.model("GiftData",giftDataSchema);


 module.exports = GiftData;