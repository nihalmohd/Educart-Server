import { Request, Response } from "express";
import { Userscheam } from "../../infra/database/userModel";
import { UserRepositoryIMP } from "../../infra/repository/userRepository";
import { Register } from "../../app/usecase/user/Register";
import { Exist } from "../../app/usecase/user/Exist";
import {User} from "../../domin/model/User/User"
import { constants } from "buffer";
import { log } from "console";

const db=Userscheam
const userRepository=UserRepositoryIMP(db)


export const register=async(req:Request,res:Response)=>{
    const {Username,Email,Password}=req.body
   try{
   
    const User = Register(userRepository)(Username,Email,Password);
    res.status(200).json({message:"Sign Up successfull",User});
   }catch(error){
    res.status(500).json({message:"Internal server error"})
   }

}

export const login =async (req:Request,res:Response)=>{
    const {Email}=req.body
    try{
        const UserExis=Exist(userRepository)(Email);
        console.log(UserExis);
        
        res.status(200).json({message:"login succesfull",UserExis}) 
    }catch (error) {
        res.status(500).json({message:"Imternal server Error"})
    }
}