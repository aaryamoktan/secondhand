const mongoose = require("mongoose")
const sbSchema = new mongoose.Schema({
    userId:{
        type:String
    },
    gender:{
        type:String
    },
    number:{
        type:Number
    },
    password:{
        type:String
    }
})
const sbmodal = mongoose.model("socialmediauser",sbSchema);
module.exports =sbmodal