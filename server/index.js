const express=require('express');
const app=express();
app.use(express.json());


require('./db/connection');
const User=require('.user/Models/User');


app.post("/",async(req,res)=>{
    let user=new User(req.body);
    let result=await user.save();
    res.send(result);
})

app.listen(27017);