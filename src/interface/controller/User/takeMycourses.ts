

import { Request, Response } from "express";
import { Login } from "../../../app/usecase/user/Login";
import { Userscheam } from "../../../infra/database/userModel";
import { UserRepositoryIMP } from "../../../infra/repository/userRepository";
import { generateAccessToken } from "../../../Utils/JwtAuthetication";
import { User } from "../../../domin/model/User/User";
import { TakeUserById } from "../../../app/usecase/user/TakeUserById";
import { UpdateuserProfile } from "../../../app/usecase/user/Updateuser";
import { TakeCourseByUserid } from "../../../app/usecase/user/takeCourseByUserid";

interface CustomRequest extends Request {
    userInfo?: { id: string; role: string };
  }

const db=Userscheam
const userRepository=UserRepositoryIMP(db)

export const takeMycourses =async (req:CustomRequest,res:Response) =>{
    try {
        const user = req.userInfo
        const _id=user?.id as string
        
        const FoundedMycourse =await TakeCourseByUserid(userRepository)(_id) 
        if(FoundedMycourse){
            console.log(FoundedMycourse,"nothign");
            res.status(200).json({message:"my course founded successfull",FoundedMycourse})
        }else{
            res.status(401).json({message:"something went wrong"})
        }
    } catch (error) {
        res.status(500).json({message:"Internal server Eroor"})
    }
}