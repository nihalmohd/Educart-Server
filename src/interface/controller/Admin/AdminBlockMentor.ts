import { Request, Response } from "express";
import { BlockUser } from "../../../app/usecase/admin/AdminUserManagment"
import { mentorSchema } from "../../../infra/database/MenterModel"
import { UserRepositoryIMP } from "../../../infra/repository/userRepository"




const Mentordb=mentorSchema
const MentorRepository=UserRepositoryIMP(Mentordb)


export const BlockMentorReq=async(req:Request,res:Response)=>{
    const {_id}=req.body
    console.log(_id,"UserId  kittiiiiiiiiii");
    
    try {
       const BlockedUser=await BlockUser(MentorRepository)(_id)
       console.log(BlockedUser);
       
       if(BlockedUser){ 
       res.status(200).json({message:"Block User Succesfull"})   
       }else{
        res.status(401).json({message:"Block User is Having Problem"})
       }
    } catch (error) {
        res.status(401).json({message:"Block User Failed"})   
    }

}