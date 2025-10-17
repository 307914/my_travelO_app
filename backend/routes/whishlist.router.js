const express=require("express");
const authMiddleware = require("../middleware/authmiddleware");
const { createwhislist, deletewhislist, getwhislist } = require("../controllers/whislistcontroller");

const router=express.Router();


router.post('/',authMiddleware,createwhislist);

router.delete('/:hotelId',authMiddleware,deletewhislist);


router.get('/hotel',authMiddleware,getwhislist);

module.exports=router;