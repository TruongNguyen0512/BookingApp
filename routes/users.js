const express =  require('express')
const {updateUser,deleteUser,getUser,getAllUser} = require("../controller/user")
const {verifyToken,verifyUser} = require("../util/verifyToken")
const router = express.Router() 


// Check authentication
router.get("/checkauthentication",verifyToken,verifyUser,(req,res,next)=>{
    res.send("hello user ,You are logged in")
})

router.get("/checkusers/:id",verifyUser,(req,res,next)=>{
    res.send("hello user, you are logged in and you can delete your account")
})

// Update
router.put("/:id", updateUser);

// Delete
router.delete("/:id",deleteUser);

// Get one
router.get("/:id", getUser);

// Get all
router.get("/", getAllUser);

module.exports = router