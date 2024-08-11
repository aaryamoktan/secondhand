const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")
const bcrypt = require("bcrypt")
const dotenv = require("dotenv")
const {signupValadiationn,loginValadiationn} = require("./middleware/velit")
const sbmodal = require("./database/sdatabase")
const app = express();
app.use(bodyParser.json())
app.use(express.json())
dotenv.config()
app.use(cors())
mongoose.connect(process.env.URL)
.then(result=>console.log(result))
.catch(err=>console.log(err))
app.post("/regist",signupValadiationn,async(req,res)=>
{
    try{
        const userId = req.body.id;
    const password = req.body.password;
    const gender = req.body.gender;
    const number = req.body.number
    const userName = req.body.userName
    console.log(userName)
    const salgen = 10;
    const haspass =await  bcrypt.hash(password,salgen)
    const savesb = new sbmodal({userName,userId,password:haspass,gender,number})
    const check = await sbmodal.findOne({userId})
    if(!check){
        await savesb.save();
        res.json("registration sucesfully")
    }
    else{
        res.json("userId is exit") 
    }
    }
    catch(err)
    {
        console.log(err)
    }
    
})
app.post("/login",loginValadiationn,async(req,res)=>
{
    try{
        const {userId,password} = req.body
    const find = await sbmodal.findOne({userId})
    if(find)
    { const match = await bcrypt.compare(password,find.password)
       if(match){
        res.json("login")
       }
       else{
        res.json("password doesnot match")
       }
    }
    else{
        res.json("email doesnot exit")
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