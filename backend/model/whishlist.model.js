const {Schema,model}=require("mongoose")


const whislistSchema=new Schema({
    hotelId:{type:String,required:true}
})


const whistlistmodel=model("Whishlist",whislistSchema);

module.exports=whistlistmodel;