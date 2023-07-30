import { Request, Response } from "express";
import { UnBlockUser } from "../../../app/usecase/admin/AdminUserManagment"
import { mentorSchema } from "../../../infra/database/MenterModel"
import { UserRepositoryIMP } from "../../../infra/repository/userRepository"

const Mentordb=mentorSchema
const MentorRepository=UserRepositoryIMP(Mentordb)

export const UnBlockMentorReq=async(req:Request,res:Response)=>{
    const {_id}=req.body
    console.log(_id,"UserId Unblock kittiiiiiiiiii");
    
    try {
       const UnBlockedUser=await UnBlockUser(MentorRepository)(_id)
       console.log(UnBlockedUser);
       
       if(UnBlockedUser){ 
       res.status(200).json({message:"Block User Succesfull"})   
       }else{
        res.status(401).json({message:"Block User is Having Problem"})
       }
    } catch (error) {
        res.status(401).json({message:"Block User Failed"})   
    }

}