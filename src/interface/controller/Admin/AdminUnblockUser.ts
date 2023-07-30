import { Request, Response } from "express";
import { Userscheam } from "../../../infra/database/userModel";
import { UserRepositoryIMP } from "../../../infra/repository/userRepository";
import { UnBlockUser } from "../../../app/usecase/admin/AdminUserManagment";



const db = Userscheam;
const UserRepository = UserRepositoryIMP(db);

export const UnBlockUserReq=async(req:Request,res:Response)=>{
    const {_id}=req.body
    console.log(_id,"UserId Unblock kittiiiiiiiiii");
    
    try {
       const UnBlockedUser=await UnBlockUser(UserRepository)(_id)
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
