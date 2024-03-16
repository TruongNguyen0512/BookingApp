const express =  require('express')
const {updateUser,deleteUser,getUser,getAllUser} = require("../controller/user")
const {verifyToken,verifyUser, verifyAdmin} = require("../util/verifyToken")
const router = express.Router() 


// // Check authentication
// router.get("/checkauthentication",verifyToken,verifyUser,(req,res,next)=>{
//     res.send("hello user ,You are logged in")
// })

// router.get("/checkusers/:id",verifyUser,(req,res,next)=>{
//     res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkAdmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("hello Admin, you are logged in and you can delete your account")
// })

// Update
router.put("/:id", verifyUser,updateUser);

// Delete
router.delete("/:id",verifyUser,deleteUser);

// Get one
router.get("/:id",verifyUser,getUser);

// Get all
router.get("/",verifyAdmin, getAllUser);

module.exports = router