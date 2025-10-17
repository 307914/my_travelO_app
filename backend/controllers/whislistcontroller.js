const whistlistmodel = require("../model/whishlist.model");
const createwhislist=async(req,res)=>{
    try{
        const {hotelId}=req.body;
        const olddata=await whistlistmodel.find({hotelId});
        if(olddata){
            res.status(403).json({message:"Already added to whishlist"});
        }
        const data=await whistlistmodel.create({hotelId});
        if(data){
            res.status(201).json(data);
        }
    }catch(error){
        res.status(500).json({message:"failed to create whislist"});

    }
}



const deletewhislist=async(req,res)=>{
    try{
        const {hotelId}=req.params;
        const data=await whistlistmodel.findOneAndDelete({hotelId});
        if(data){
            res.status(200).json("the hotel is removed from whislist ");
        }
    }catch(error){
        res.status(500).json({message:"no item found in whishlist"});
    }
}


const getwhislist=async(req,res)=>{
    try{
        const data=await whistlistmodel.find({});
        if(data){
            res.status(200).json(data);
        }
    }catch(error){
        res.status(404).json({message:"cannot find hotel"})
    }
}
module.exports={createwhislist,deletewhislist,getwhislist};