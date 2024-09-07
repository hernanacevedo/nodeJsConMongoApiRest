const mongoose = require ('mongoose')
const mongooseDelete = require("mongoose-delete")
const USerScheme = new mongoose.Schema(
{
    name:{
        type:String
    }
},
{   age:{
        type: Number
    }

},
{   email:{
    type:String,
    unique:true
}

},
{   passsword:{
    type:String,
    
}

},
{   role:{
    type:["user", "admin"],
    default: "user",
    
}

},
{
    timestamps: true,
    versionKey:false
}
);
USerScheme.plugin(mongooseDelete,{overrideMethods:"all"});
module.exports = mongoose.model("users",USerScheme)