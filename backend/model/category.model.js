const mongoose=require("mongoose");
const {Schema,model}=mongoose;


const categorySchema=new Schema({
category:{type:String,requried:true}
})

const Category=model("Category",categorySchema);

module.exports=Category;