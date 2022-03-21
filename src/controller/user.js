const express=require("express");
const { body, validationResult } = require('express-validator');
const uploads=require("../middlewear/upload")

const User=require("../models/user.models");

const router=express.Router();

router.post("",uploads.single("profileImages"),
body("firstName").trim().not().isEmpty().withMessage("firstname not be empty").
isLength({min:3,max:30}).withMessage("firstname between 3 to 30"),
body("lastName").trim().not().isEmpty().withMessage("lastname not be empty").
isLength({min:3,max:30}).withMessage("lastname between 3 to 30"),
body("age").trim().not().isEmpty().withMessage("firstname not be empty").isNumeric()
.withMessage("AGE between 1 to 150").custom(
    (value)=>{
        if(value <1 || value>150){
            throw new Error("INCURRECT AGE PROVIDED")
        }
        return true
    }
),
body("email").not().isEmpty().isEmail().withMessage("EMAIL not be empty").
custom (async (value)=>{
    const user =await User.findOne({email:value});
    if(user){
        throw new Error ("email is already taken ")
    }
    return true;
})

,
async(req,res)=>{
    try{

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }


        const user=await User.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            age:req.body.age,
            email:req.body.email,
            profileImages:req.file.path
        });
        return res.status(200).send(user)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

module.exports=router;