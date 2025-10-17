const express=require("express");
const Category = require("../model/category.model");
const categories = require("../data/category");

const router=express.Router();


router.post('/',async(req,res)=>{
    try{
        const data=await Category.insertMany(categories.data);
     if(data){
        res.status(201).json(data);
    }
    else{
        res.status(404).json({message:"data not found"});
    }
    }catch(error){
        console.log("error is in categoryimport",error);
    }
})

module.exports=router;