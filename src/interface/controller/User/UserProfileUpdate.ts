

import { Request, Response } from "express";
import { Login } from "../../../app/usecase/user/Login";
import { Userscheam } from "../../../infra/database/userModel";
import { UserRepositoryIMP } from "../../../infra/repository/userRepository";
import { generateAccessToken } from "../../../Utils/JwtAuthetication";
import { User } from "../../../domin/model/User/User";
import { TakeUserById } from "../../../app/usecase/user/TakeUserById";
import { UpdateuserProfile } from "../../../app/usecase/user/Updateuser";

interface CustomRequest extends Request {
    userInfo?: { id: string; role: string };
  }

const db=Userscheam
const userRepository=UserRepositoryIMP(db)

export const UserProfileUpdate =async (req:CustomRequest,res:Response) =>{
    try {
        const id =req.userInfo?.id
        const {ImagePreviewProfile,UpdateUsername} =req.body
        const UpdatedUser =await UpdateuserProfile(userRepository)(id as string,UpdateUsername,ImagePreviewProfile)
       if(UpdatedUser){
        res.status(200).json({message:"Updation is successfull",UpdatedUser})
        }else{
            res.status(401).json({message:"something went wrong"})
        }
    } catch (error) {
        res.status(200).json({message:"Internal Server Error"})
    }
}