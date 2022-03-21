const mongoose=require("mongoose");

const publicationSchema=new mongoose.Schema(
    {
        Name:{type:String,required:true},
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const Public=mongoose.model("public",publicationSchema);
module.exports=Public