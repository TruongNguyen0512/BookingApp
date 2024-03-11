const express =  require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const hotelsRoute = require('./routes/hotels')
const roomsRoute = require('./routes/rooms')
const cookieParser = require('cookie-parser')
const app =  express() 


const connect = async () => {
    try{
        await mongoose.connect('mongodb+srv://William:123@cluster0.2d3hr9e.mongodb.net/Booking?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    }catch (error) {
        throw error
    }
}

mongoose.connection.on('disconnected',() =>{
    console.log("monggoDb disconnected")
})

mongoose.connection.on('connected', () => {
    console.log("MongoDB connected");
});

// middlewares 
app.use(cookieParser())

app.use(express.json())

app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)

app.use((err,req,res,next) =>{
    const errorStatus = err.status || 500 
    const errorMessage = err.status || "Something went wrong"
    return res.status(500).json({
        sucess : false ,
        status : errorStatus , 
        message : errorMessage , 
        stack : err.stack ,
    })
})

app.listen(3000,() =>{
    connect()
    console.log("Connected to backed")
})