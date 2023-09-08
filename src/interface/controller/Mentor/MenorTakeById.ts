import { Request, Response } from "express";
import { mentorSchema } from "../../../infra/database/MenterModel"
import { UserRepositoryIMP } from "../../../infra/repository/userRepository"
import { Login } from "../../../app/usecase/user/Login";
import { generateAccessToken } from "../../../Utils/JwtAuthetication";
import { TakeUserById } from "../../../app/usecase/user/TakeUserById";

interface CustomRequest extends Request {
    userInfo?: { id: string; role: string };
  }

const Mentordb=mentorSchema
const MentorRepository=UserRepositoryIMP(Mentordb)

export const MentorTakeById=async(req:CustomRequest,res:Response)=>{
  try {
    const Mentor =req.userInfo
    const _id =Mentor?.id
   const FoundedMentor = await TakeUserById(MentorRepository)(_id)
   if(FoundedMentor){
    res.status(200).json({message:"mentor founded successfull",FoundedMentor})
   }else{
    res.status(401).json({message:"something went wrong "})
   }
    }catch (error) {
        res.status(500).json({message:"Internal server Error"})
    }
}