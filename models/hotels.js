const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var HotleSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    type :{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    address:{
        type: String,
        required:true,
    },
    distance : {
        type : String , 
        require :true 
    },
    photos: {
        type : [String] , 
        require: true 
    }, 
    title: {
        type : String , 
        require: true 
    },
    desc: {
        type : String , 
        require: true 
    },
    rating : {
        type : Number , 
        min : 0 , 
        max : 5  
    },
    rooms : {
        type :[String] , 
    },
    cheapesPrice : {
        type : Number , 
        require : true 
    }, 
    featured : {
        type : Boolean , 
        default  : false , 
    } 
});

//Export the model
module.exports = mongoose.model('Hotel', HotleSchema)