
const User = require("../models/users")

const updateUser =  async (req,res,next) =>{
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updateUser);
    } catch (err) {
        res.status(500).json(err);
    }
}

const deleteUser =  async (req,res,next) =>{
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
    } catch (err) {
        res.status(500).json(err);
    }
}

const getUser =  async (req,res,next) =>{
    try {
        const user= await User.findById(req.params.id);
        res.status(200).json(User);
    } catch (err) {
        res.status(500).json(err);
    }
}
const getAllUser =  async (req,res,next) =>{
    try {
        const Users = await User.find();
        res.status(200).json(Users);
    } catch (err) {
        next(err)
    }
}

module.exports = {updateUser,deleteUser,getUser,getAllUser } 