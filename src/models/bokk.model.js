const mongoose=require("mongoose");

const bookSchema=new mongoose.Schema(
    {
        content:{type:String,required:true},
        like:{type:Number,required:true,default:0},
        coverImages:{type:String,required:true},
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const Book=mongoose.model("book",bookSchema);
module.exports=Book