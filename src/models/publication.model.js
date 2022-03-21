const mongoose=require("mongoose");

const publicationSchema=new mongoose.Schema(
    {
        Name:{type:String,required:true},
        bookId:{type:mongoose.Schema.Types.ObjectId,ref:"book",required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const Public=mongoose.model("public",publicationSchema);
module.exports=Public