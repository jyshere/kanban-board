import User from "../models/User.js";
import jwt from "jsonwebtoken";
import generateOTP from "../utils/generateOTP.js";
import { storeOTP,getOTP,deleteOTP } from "../services/redisServices.js";
import { sendOTP } from "../services/emailServices.js";

const generateToken=(userId)=>{
    return jwt.sign({id:userId},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRY,
    });
};

export const sendOtp = async(req,res)=>{
    try{
        const {email}=req.body;
        if(!email)return res.status(400).json({message:"Email is required"});

        const otp=generateOTP();
        await storeOTP(email,otp);
        await sendOTP(email,otp);

        res.json({message:"OTP send to your email"});

    }catch(error)
    {
        console.log(error);
        res.status(500).json({message:"Failed to send otp"});
    }

};

export const verifyOtp= async (req,res)=>{
    try{
        const {email,otp}=req.body;
        if(!email||!otp)return res.status(400).json({message:"Email and OTP are required"});

        const storedOTP=await getOTP(email);
        if(!storedOTP)return res.status(400).json({message:"OTP expired"});
        if(storedOTP!==otp) return res.status(400).json({message:"Invalid OTP"});

        await deleteOTP(email);

        let user = await User.findOne({email});
        if(!user) user=await User.create({email});

        const token= generateToken(user._id);

        res.cookie("token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV==="production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000//age to the token 7 days
        });

        res.json({
            message:"Logged in uscessfully",
            user:{id:user._id,email:user.email,name:user.name},
        });
    }catch(error)
    {
        res.status(500).json({message:"Verification failed"});
    }
};

export const logout= async(req,res)=>{
    res.clearCookie("token");
    res.json({message:"Logged out"});
};

export const getMe=async(req,res)=>{
    res.json({user:req.user});
};