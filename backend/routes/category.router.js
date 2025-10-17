const categoryHandler = require("../controllers/catregorycontroller");
const express=require("express");
const router=express.Router();


router.get('/',categoryHandler);



module.exports=router;