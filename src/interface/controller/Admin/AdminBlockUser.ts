import { Request, Response } from "express";
import { Userscheam } from "../../../infra/database/userModel";
import { UserRepositoryIMP } from "../../../infra/repository/userRepository";
import { BlockUser } from "../../../app/usecase/admin/AdminUserManagment";



const db = Userscheam;
const UserRepository = UserRepositoryIMP(db);

export const BlockUserReq=async(req:Request,res:Response)=>{
    const {_id}=req.body
    console.log(_id,"UserId  kittiiiiiiiiii");
    
    try {
       const BlockedUser=await BlockUser(UserRepository)(_id)
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
