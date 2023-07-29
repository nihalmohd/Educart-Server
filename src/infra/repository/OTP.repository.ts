import { OTPUser, User } from "../../domin/model/User/User";
import { MongoDBOTP } from "../database/OTP";

export type OTPRepository ={
    createOTP:(User:OTPUser)=>Promise<OTPUser> 
    findByOTP:(Email:string)=> Promise<OTPUser|null>
}


export const OTPRepositoryIMP=(OtpModel:MongoDBOTP):OTPRepository=> {
    
    const createOTP=async (User:OTPUser)=>{
        console.log(User,"njhuhhjh");
        
        const createdUser=await OtpModel.create(User)
        console.log("usercreated",createdUser.toObject())
        return createdUser.toObject()
    }
    const findByOTP=async (Email:String):Promise<OTPUser|null>=>{
        const FoundOTPUser=await OtpModel.findOne({Email:Email})
        return FoundOTPUser?FoundOTPUser.toObject():null
    }
    return{
        createOTP,
        findByOTP
    }
}