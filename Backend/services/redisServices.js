import redis from "../config/redis.js";

export const storeOTP= async(email,otp)=>{
    await redis.set(`otp:${email}`,otp, "EX",300);
}

export const getOTP = async(email)=>{
    return await redis.get(`otp:${email}`);
};

export const deleteOTP= async(email)=>{
    await redis.del(`otp:${email}`);
};

export const blacklistToken= async(token,expiry)=>{
    await redis.set(`blacklist:${token}`,1,"EX",expiry);
};

export const isTokenBlacklisted = async (token) => {
  return (await redis.get(`blacklist:${token}`)) === "1";
};