import { OTPUser } from "../../../domin/model/User/User";
import {OTPRepository} from "../../../infra/repository/OTP.repository"


export const FindOTP=(UserOTPRepository:OTPRepository)=>async(Email:string)=>{
    const UserEmail=Email  
    console.log(Email,"nihalllllll");
    
    const createdUser=await UserOTPRepository.findByOTP(UserEmail);
    return createdUser
}