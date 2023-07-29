import { Request, Response } from "express";
import { Userscheam } from "../../../infra/database/userModel";
import { UserRepositoryIMP } from "../../../infra/repository/userRepository";
import { otpSend } from "../../../Utils/OTP-generator";
import { OTPSchema } from "../../../infra/database/OTP";
import { OTPRepositoryIMP } from "../../../infra/repository/OTP.repository";
import { RegisterOTP } from "../../../app/usecase/user/OTPRegister";
const OTPScheam=OTPSchema
const OTPUserRepository=OTPRepositoryIMP(OTPScheam)


export const OTPAuth=async(req:Request,res:Response)=>{
    const {Email}=req.body
    try{
     const otp=otpSend(Email)
     const SendOtp=otp.toString()
        console.log(otp);
        const InsertedOtp=await RegisterOTP(OTPUserRepository)(Email,SendOtp)
        res.status(200).json({message:"OTP getted here",status:true})
    }catch{
        res.status(401).json({message:"Internal server Error"})
    }
}