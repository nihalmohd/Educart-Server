import { Request, Response } from "express";
import { displayUsers } from "../../../app/usecase/admin/AdminFetchUsers"
import { mentorSchema } from "../../../infra/database/MenterModel"
import { UserRepositoryIMP } from "../../../infra/repository/userRepository"

const Mentordb=mentorSchema
const MentorRepository=UserRepositoryIMP(Mentordb)

export const DisplayMentors=async (req:Request,res:Response)=>{
    try{
        const DisplayGetUser=await displayUsers(MentorRepository)
        if(DisplayGetUser){
        res.status(201).json({message:"All Users Got",DisplayGetUser})
        }
    }catch(error){
     res.status(401).json({message:"Internal server error"})
    }
}

