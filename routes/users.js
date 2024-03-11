const express =  require('express')
const {updateUser,deleteUser,getUser,getAllUser} = require("../controller/user")
const router = express.Router() 


// Update
router.put("/:id", updateUser);

// Delete
router.delete("/:id",deleteUser);

// Get one
router.get("/:id", getUser);

// Get all
router.get("/", getAllUser);

module.exports = router