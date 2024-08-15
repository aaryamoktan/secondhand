const express = require("express")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken");
const cors = require("cors")
const ensure = require("./middleware/auth")
const bodyParser = require("body-parser")
const bcrypt = require("bcrypt")
const dotenv = require("dotenv")
const session = require("express-session")
const {signupValadiationn,loginValadiationn} = require("./middleware/velit")
const sbmodal = require("./database/sdatabase")
const app = express();
app.use(bodyParser.json())
app.use(express.json())
dotenv.config()
app.use(cors({
    origin:process.env.FRONT_URL,
    Credentials:true
}))

mongoose.connect(process.env.URL)
.then(result=>console.log(result))
.catch(err=>console.log(err))
app.post("/regist"  ,async(req,res)=>
{
    try{
        const userId = req.body.id;
    const password = req.body.password;
    const gender = req.body.gender;
    const number = req.body.number
    const userName = req.body.userName
    const salgen = 10;
    const haspass =await  bcrypt.hash(password,salgen)
    const savesb = new sbmodal({userName,userId,password:haspass,gender,number})
    const check = await sbmodal.findOne({userId})
    if(!check){
        await savesb.save();
        res.status(200).json({message:"registration sucesfully",success:true})
    }
    else{
        res.status(409).json({message:'user is already exit,you can login',success:false}) 
    }
    }
    catch(err)
    {
       res.status(500).json({
        message:"Internal server Error",
        sucess:false
       })
    }
    
})
app.get("/home",ensure,async(req,res)=>{
    
  try{
  }
  catch(err)
  {
    console.log(err)
  }
})
app.get("/getdata/:loog",async(req,res)=>{
    
    try{
        
      const id = req.params.loog;
      await sbmodal.findById({_id:id})
      .then((result)=>res.json(result))
      .catch(err=>console.log(err))
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
        const jwtToken = jwt.sign(
            {userId:find.userId,_id:find._id},
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )
        res.status(200).json({message:"login ",
            sucess:true,
            jwtToken,
            userId:find.userId,
            user_id:find._id,
            userName:find.userName})
       }
       else{
        res.status(409).json({message:"password doesnot match",sucess:false})
       }
    }
    else{
        res.status(409).json({message:"email doesnot exit",sucess:false})
    }
    }
    catch(err)
    {
        res.status(409)
        .json({
            message:"internal server error",
            sucess:false
        })
    }
    
})

app.listen(process.env.PORT,(req,res)=>
{
    console.log("hekkwp")
})
