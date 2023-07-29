import { Request, Response } from "express";
import { OTPSchema } from "../../../infra/database/OTP"
import { Exist } from "../../../app/usecase/user/Exist";
import { OTPRepositoryIMP } from "../../../infra/repository/OTP.repository";
import { RegisterOTP } from "../../../app/usecase/user/OTPRegister";
import { FindOTP } from "../../../app/usecase/user/OTPVerification";

const OTPScheam=OTPSchema
const OTPUserRepository=OTPRepositoryIMP(OTPScheam)

export const OTPVerification = async (req: Request, res: Response) => {
  const { Email,OTP } = req.body;
  console.log("hlooooooo",Email,OTP);
  
    try {
      // console.log("OTPUserRepository:", OTPUserRepository);
      const storedOTP = await FindOTP(OTPUserRepository)(Email);
      console.log("storedOTP:", storedOTP); 
    if(storedOTP){
     if(storedOTP?.OTP===OTP){
      console.log("complete");
      
      res.status(200).json({message:"Register Completed",Status:true})
     }else{
      res.status(400).json({messge:"Please enter a valid OTP",Status:false})
     }
    }else{
      res.status(400).json("Invalid Cridential")
    }
    } catch (error) {
      console.log("Error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  
