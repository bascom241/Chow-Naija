import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
export const generateTokenAndSetCookie =  (res, user) => {
    const token = jwt.sign({userId: user._id}, process.env.JWT_TOKEN, {expiresIn:"7d"});

    res.cookie("token", token, {
        httpOnly:true,
        secure:process.env.NODE_ENV === "production",
        sameSite:"strict",
        maxAge:7*24*60*60*1000
    })
}