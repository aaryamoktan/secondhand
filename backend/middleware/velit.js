const Joi  = require("joi")
const signupValadiationn = (req,res,next)=>
{
    const schema = Joi.object({
        userName:Joi.string().min(3).max(100).required(),
        id:Joi.string().email().required(),
        password:Joi.string().min(8).max(100).required(),
        gender:Joi.string().required(),
        number:Joi.number().min(10).max(10).required()
    });
    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400)
        .json({message:"Bad Request",error})
    }
    next();
    
    
}
const loginValadiationn = (req,res,next)=>
    {
        const schema = Joi.object({
            id:Joi.string().email().required(),
            password:Joi.string().min(8).max(100).required(),
        });
        const {error} = schema.validate(req.body);
        if(error){
            return res.status(400)
            .json({message:"Bad Request",error})
        }
        next();
        
        
    }
module.exports={
    signupValadiationn,
    loginValadiationn
}