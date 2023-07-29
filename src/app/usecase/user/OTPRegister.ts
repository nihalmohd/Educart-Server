import { log } from "console";
import { OTPUser } from "../../../domin/model/User/User";
import {OTPRepository} from "../../../infra/repository/OTP.repository"


export const RegisterOTP=(OTPRepositoryIMP:OTPRepository)=>async (Email: string, OTP: string,)=> {
    console.log("hlooooooooo");
    
    const newOTPUser: OTPUser = {
        Email,
        OTP
    };
    const createdUser = await OTPRepositoryIMP.createOTP(newOTPUser);
    console.log(createdUser);
    
    return createdUser;
}