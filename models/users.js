const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique : true
    },
    password :{
        type:String,
        required:true,
        unique : true 
    },
    email : {
        type :  String , 
        require : true , 
    } , 
    isAdmin : {
        type : Boolean , 
        default  : false ,  
    } 
},{timestamps : true});

//Export the model
module.exports = mongoose.model('User', UserSchema)