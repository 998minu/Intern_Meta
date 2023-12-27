const mongoose=require('mongoose');

const userschema=new mongoose.Schema({
    name:string,
    email:string,
    message:string,
    phone_no:number
});
module.exports = mongoose.model("User",userschema);