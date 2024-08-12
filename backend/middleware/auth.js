const jwt = require("jsonwebtoken")
const ensure = async(req,res,next)=>{
    const auth = req.headers['authorization'];
    if(!auth){
        return res.status(403).json({message:"unauthorized"})

    }
    try{
        const decoded = jwt.verfy(auth,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    }
    catch(err)
    {
        res.status(403).json({message:"fail unauthorized"})
    }
}
module.exports = ensure