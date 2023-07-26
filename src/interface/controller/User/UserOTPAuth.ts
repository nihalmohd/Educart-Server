import { Request, Response } from "express";
import { Userscheam } from "../../../infra/database/userModel";
import { UserRepositoryIMP } from "../../../infra/repository/userRepository";
import { otpSend } from "../../../Utils/OTP-generator";



export const OTPAuth=(req:Request,res:Response)=>{
    const {Email}=req.body
    try{
        const otp=otpSend(Email)
        console.log(otp);
        
        res.status(200).json({message:"OTP getted here",otp})
    }catch{
        res.status(401).json({message:"Internal server Error"})
    }
}