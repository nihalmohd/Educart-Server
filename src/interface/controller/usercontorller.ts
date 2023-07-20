import { Request, Response } from "express";
import { Userscheam } from "../../infra/database/userModel";
import { UserRepositoryIMP } from "../../infra/repository/userRepository";
import { Register } from "../../app/usecase/user/Register";
import { Exist } from "../../app/usecase/user/Exist";
import { Login } from "../../app/usecase/user/Login";
import jsonwebtoken, {JwtPayload} from "jsonwebtoken"
import { generateAccessToken, generateRefreshToken } from "../../Utils/JwtAuthetication";
const db=Userscheam
const userRepository=UserRepositoryIMP(db)


export const register=async(req:Request,res:Response)=>{
    const {Username,Email,Password}=req.body
   try{
    const UserExit=await Exist(userRepository)(Email);
    console.log(UserExit);
    if(UserExit===null){
        const User =await Register(userRepository)(Username,Email,Password);
        if(User){
            const {_id,role}=JSON.parse(JSON.stringify(User))
            const AccessToken=generateAccessToken(_id,role)
            
            res.status(200).json({message:"Sign Up successfull",User,AccessToken});   
        }else{
            res.status(401).json({message:"Invalid Cridential"})
        }
    }else if(UserExit.Username===Username){
        res.status(401).json({message:"Username already Exist"})
    }else if(UserExit.Email===Email){
        res.status(401).json({message:"Email already Exist"})
    }else if(UserExit.Password===Password){
        res.status(401).json({message:"Password already Exist"}) 
    }
   }catch(error){
    res.status(500).json({message:"Internal server error"})
   }

}

export const login =async (req:Request,res:Response)=>{
    const {Username}=req.body
    try{
        const logincheck=await Login(userRepository)(Username);
        if(logincheck){
            res.status(200).json({message:"login succesfull",logincheck}) 
        }else{
            res.status(401).jsonp({message:"User Not Found"})
        }
    }catch (error) {
        res.status(500).json({message:"Imternal server Error"})
    }
}