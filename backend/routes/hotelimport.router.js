const express=require("express");
const HotelModel = require("../model/hotel.model");
const hotels = require("../data/hotels");
const router=express.Router();



router.post('/',async(req,res,next)=>{
    try{
        await HotelModel.deleteMany({});
    const data=await HotelModel.insertMany(hotels.data);
    res.send({message:"the data inserted succesfully",data:data,status:201});
    }catch(error){
        console.log("the error is",error);
    }
})
module.exports=router;