const {hash,genSalt,compare}=require("bcrypt");



const genpassword=async(password)=>{
    const salt= await genSalt();

    const hashedpassword=await hash(password,salt);
    return hashedpassword;
}


const verifypassword=async(password,hashedpassword)=>{

    return await compare(password,hashedpassword);
}


module.exports={verifypassword,genpassword};