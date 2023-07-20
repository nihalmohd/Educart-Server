import { Request, Response } from "express";
import { Userscheam } from "../../infra/database/userModel";
import { UserRepositoryIMP } from "../../infra/repository/userRepository";
import { otpSend } from "../../Utils/OTP-generator";
import { Exist } from "../../app/usecase/user/Exist";
import { User } from "../../domin/model/User/User";

const db=Userscheam
const userRepository=UserRepositoryIMP(db)


export const ForgotOtp=(req:Request,res:Response)=>{
    const {ForgotEmail} = req.body
try{
const ForgotUser=Exist(userRepository)(ForgotEmail)
console.log(ForgotUser)
if(ForgotEmail){
    res.status(200).json({message:"successfull"})
}else{
 res.status(401).json({message:"User Not Found"})
}
}catch (error){
res.status(401).json({message:"internal server error"})
}

}