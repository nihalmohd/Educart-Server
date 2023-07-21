import { Request, Response } from "express";
import { Admin } from "../../../domin/model/Admin/Admin";
import { Userscheam } from "../../../infra/database/userModel";
import { UserRepositoryIMP } from "../../../infra/repository/userRepository";
import { displayUsers } from "../../../app/usecase/admin/AdminFetchUsers";


const db = Userscheam;
const UserRepository = UserRepositoryIMP(db);

export const DisplayUsers=async (req:Request,res:Response)=>{
    try{
        const DisplayGetUser=await displayUsers(UserRepository)
        if(DisplayGetUser){
        res.status(201).json({message:"All Users Got",DisplayGetUser})
        }
    }catch(error){
     res.status(401).json({message:"Internal server error"})
    }
}

