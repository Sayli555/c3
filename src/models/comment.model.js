const mongoose=require("mongoose");

const commentSchema=new mongoose.Schema(
    {
        body:{type:String,required:true},
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const Comment=mongoose.model("user",commentSchema);

module.exports=Comment