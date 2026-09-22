import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { isTokenBlacklisted } from "../services/redisServices.js";

const authMiddleware= async(req,res,next)=>{
    try{
        const token= req.cookies.token;
        if(!token)return res.status(401).json({message:"Not authenticated"});

        if(await isTokenBlacklisted(token))return res.status(401).json({message:"Token invalid"});

        const decoded= jwt.verify(token,process.env.JWT_SECRET);
        const user= await User.findById(decoded.id).select("-__v");
        if (!user) return res.status(401).json({ message: "User not found" });

        req.user=user;
        next();

    }catch(error){
        res.status(401).json({message:"Invalid token"});

    }
};

export default authMiddleware;