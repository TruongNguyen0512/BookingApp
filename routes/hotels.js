const express = require('express');
const Hotel = require('../models/hotels');
const { createError } = require('../util/error');
const { createHotel,updateteHotel, deleteHotel,getHotel, getAllHotel } = require('../controller/hotel');
const router = express.Router();

// Create
router.post("/", createHotel);

// Update
router.put("/:id", updateteHotel);

// Delete
router.delete("/:id",deleteHotel);

// Get one
router.get("/:id", getHotel);

// Get all
router.get("/", getAllHotel);

module.exports = router ;
