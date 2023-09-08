
import { Request, Response } from "express";
import { mentorSchema } from "../../../infra/database/MenterModel"
import { UserRepositoryIMP } from "../../../infra/repository/userRepository"
import { MentorUpdateProfile } from "../../../app/usecase/Mentor/MentorUpdate";

interface CustomRequest extends Request {
    userInfo?: { id: string; role: string };
  }

const Mentordb=mentorSchema
const MentorRepository=UserRepositoryIMP(Mentordb)


export const MentorProfileUpdate =async (req:CustomRequest,res:Response) =>{
    try {
        const id =req.userInfo?.id
        const {ImagePreviewProfile,UpdateUsername} =req.body
        const UpdatedUser =await MentorUpdateProfile(MentorRepository)(id as string,UpdateUsername,ImagePreviewProfile)
       if(UpdatedUser){
        res.status(200).json({message:"Updation is successfull",UpdatedUser})
        }else{
            res.status(401).json({message:"something went wrong"})
        }
    } catch (error) {
        res.status(200).json({message:"Internal Server Error"})
    }
}