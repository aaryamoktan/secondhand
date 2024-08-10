const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcrypt")
const dotenv = require("dotenv")
const sbmodal = require("./database/sdatabase")
const app = express();
app.use(express.json())
dotenv.config()
app.use(cors())
mongoose.connect(process.env.URL)
.then(result=>console.log(result))
.catch(err=>console.log(err))
app.post("/regist",async(req,res)=>
{
    try{
        const userId = req.body.id;
    const password = req.body.password;
    const gender = req.body.gender;
    const number = req.body.number
    const salgen = 10;
    const haspass =await  bcrypt.hash(password,salgen)
    const savesb = new sbmodal({userId,password,gender,number})
    const check = await sbmodal.findOne({userId})
    if(!check){
        await savesb.save();
        res.json("registration sucesfully")
    }
    else{
        res.json("userId is exit") 
    }
    
    console.log(userId,password,gender,number)
    }
    catch(err)
    {
        console.log(err)
    }
    
})
app.post("/login",async(req,res)=>
{
    try{
        const {userId,password} = req.body
    const find = await sbmodal.findOne({userId})
    if(find)
    {
        console.log(password)
        console.log(find.userId)
       if(password == find.password){
        res.json("login")
        console.log("done")
       }
       else{
        res.json("password doesnot match")
        console.log("not match")
       }
    }
    }
    catch(err)
    {
        console.log(err)
    }
    
})
app.listen(process.env.PORT,(req,res)=>
{
    console.log("hekkwp")
})