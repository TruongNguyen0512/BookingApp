const express = require('express');
const Hotel = require('../models/hotels');
const { createError } = require('../util/error');
const { createHotel,updateteHotel, deleteHotel,getHotel, getAllHotel } = require('../controller/hotel');
const { verifyAdmin } = require('../util/verifyToken');
const router = express.Router();

// Create
router.post("/", verifyAdmin,createHotel);

// Update
router.put("/:id",verifyAdmin, updateteHotel);

// Delete
router.delete("/:id",verifyAdmin, deleteHotel);

// Get one
router.get("/:id", getHotel);

// Get all
router.get("/", getAllHotel);

module.exports = router ;
