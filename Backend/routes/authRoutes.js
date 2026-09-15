const express= require("express");
const User=require("../models/User");
const bcrypt= require("bcryptjs");
const router=express.Router();

router.post("/signup",async (req,res)=>{

    try{
    const{name,email,password}=req.body;

    if(!name|| !email || !password){
        return res.status(400).json({
            message:"All fields are required"
        });
    }

    const existingUser= await User.findOne({email});

     //check if user already exist
    if(existingUser){
        return res.status(400).json({
            message:"User already exists"
        })
    }

    const hashedPassword=await bcrypt.hash(password,10);

    const user= await User.create({
        name,
        email,
        password:hashedPassword
    });

    res.status(201).json({
        message:"User Created sucessfully",
        user:{
            id: user._id,
            name:user.name,
            email: user.email
        }
    });
    }catch(error){
        console.error("signup :", error);
        res.status(500).json()({
            message:"Something went wrong. Please try again."
        });

    }


});



router.post("/login",async(req,res)=>{

    try{
    const{email,password} =req.body;

    if(!email || !password)
    {
        return res.status(400).json({
            message:"Email and Password are required"
        });
    }

    const user= await User.findOne({email});

    if(!user){
        return res.status(401).json({
            message:"Invalid email or password"
        });
    }

    const isPasswordCorrect= await bcrypt.compare(password,user.password);

    if(!isPasswordCorrect)
    {
        return res.status(401).json({
            message:"Invalid email or password."
        });
    }

    res.status(200).json({
        message: "Login Sucessful",
        user:{
            id:user._id,
            name:user.name,
            email:user.email
        }

    });
    }catch(error)
    {
        console.error("Login:",error);
        res.status(500).json({
            message:"someting went wrong"
        });
    }

});

module.exports= router;