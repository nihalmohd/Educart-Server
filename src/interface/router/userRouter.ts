import {Request, Response, Router} from "express"
import {register } from "../controller/User/usercontorller";
import { login} from "../controller/User/UserloginController";
import { OTPAuth } from "../controller/User/UserOTPAuth";
import { ForgotOtp } from "../controller/User/forgotEmail";
import { OTPVerification } from "../controller/User/OTPVerification";

export const userRouter=Router()
 
userRouter.get("/",(req:Request,res:Response)=>{
    console.log("working");
    res.status(200).json({status:"done"})
})
//Post sign Up
userRouter.post("/user/register",register)
userRouter.post("/user/login",login)
userRouter.post("/user/OTP",OTPAuth)
userRouter.post("/user/ForgotPassword",ForgotOtp)
userRouter.post("/user/VerifyOTP",OTPVerification)

