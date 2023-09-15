import { Request, Response } from "express";
import { Login } from "../../../app/usecase/user/Login";
import { Userscheam } from "../../../infra/database/userModel";
import { UserRepositoryIMP } from "../../../infra/repository/userRepository";
import { generateAccessToken } from "../../../Utils/JwtAuthetication";
import { User } from "../../../domin/model/User/User";
import { TakeUserById } from "../../../app/usecase/user/TakeUserById";

interface CustomRequest extends Request {
    userInfo?: { id: string; role: string };
  }

const db=Userscheam
const userRepository=UserRepositoryIMP(db)

export const UserTakeProfile=async (req:CustomRequest,res:Response)=>{
    console.log('helooooo');
    
 try {
    const user =req.userInfo
    const id=user?.id
    console.log(id,"constroler");
    
    const FoundedUser = await TakeUserById(userRepository)(id)
    console.log(FoundedUser,"contorller");
    
    if(FoundedUser){
        res.status(200).json({message:"User Founded successfully",FoundedUser})
    }else{
        res.status(401).json({message:"soemthing went wrong"})
    }
 } catch (error) {
    res.status(501).json({message:"Internal Server Error"})
 }
}

   