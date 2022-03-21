const express=require("express");
const { body, validationResult } = require('express-validator');

const Book=require("../models/user.models");

const router=express.Router();


router.post("",async(req,res)=>{
    try{
        const post=await this.post.create(req.body)
    }
})
module.exports=router;