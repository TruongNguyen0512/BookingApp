const Hotel = require('../models/hotels');

const createHotel =  async (req,res,next) =>{
    const newHotel = new Hotel(req.body);
    try {
        const saveHotel = await newHotel.save();
        res.status(200).json(saveHotel);
    } catch (err) {
        next(err)
    }
}

const updateteHotel =  async (req,res,next) =>{
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updateHotel);
    } catch (err) {
        res.status(500).json(err);
    }
}

const deleteHotel =  async (req,res,next) =>{
    try {
        const deleteHotel = await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted");
    } catch (err) {
        res.status(500).json(err);
    }
}

const getHotel =  async (req,res,next) =>{
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (err) {
        res.status(500).json(err);
    }
}
const getAllHotel =  async (req,res,next) =>{
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (err) {
        next(err)
    }
}

module.exports = {createHotel,updateteHotel,deleteHotel,getHotel,getAllHotel } 