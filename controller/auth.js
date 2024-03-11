const User = require("../models/users")
const bcryptjs =  require("bcryptjs");
const { createError } = require("../util/error");
const jwt  = require("jsonwebtoken")
const process =  require("process")
const register = async (req,res,next) =>{
   try {
      const salt = bcryptjs.genSaltSync(10) ; 
      const hash = bcryptjs.hashSync(req.body.password,salt)
      const newUser = new User({
        username :req.body.username ,
        password : hash , 
        email :req.body.email , 
      })
      await newUser.save()
      res.status(201).send("User has been created")
   } catch (error) {
      next(error)
   }
}

const login = async (req,res,next) =>{
   try {
      const user = await User.findOne({username :req.body.username})
      if(!user) return next(createError(404,"User not found"))
      const isPassword = await bcryptjs.compare(req.body.password, user.password);

      if(!isPassword) return next(createError(400,"Wrong password or username"))
       
      const token = jwt.sign({id:user._id,isAdmin:user.isAdmin},"93478923DJSBKJSAHDIADA")
      const {password,isAdmin,...otherDetails} = user._doc;
      res.cookie("access_token",token,{
         httpOnly :true ,
      }).status(200).json({...otherDetails}) 
   } catch (error) {
      next(error)
   }
}
module.exports = {register,login}