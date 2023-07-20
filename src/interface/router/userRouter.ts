import {Request, Response, Router} from "express"
import {register } from "../controller/usercontorller";
import { login} from "../controller/UserloginController";
import { OTPAuth } from "../controller/UserOTPAuth";
import { ForgotOtp } from "../controller/forgotEmail";

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

