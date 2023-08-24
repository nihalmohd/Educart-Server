import { Request, Response } from "express";
import { generateAccessToken } from "../../../Utils/JwtAuthetication";
import { Exist } from "../../../app/usecase/user/Exist";
import { Register } from "../../../app/usecase/user/Register";
import { mentorSchema } from "../../../infra/database/MenterModel";
import { UserRepositoryIMP } from "../../../infra/repository/userRepository";



const Mentordb=mentorSchema
const MentorRepository=UserRepositoryIMP(Mentordb)

export const MentorRegister=async(req:Request,res:Response)=>{
    const {Username,Email,Password,IsGoogle}=req.body
    console.log(Username,Email,Password,IsGoogle)
   try{
    const UserExit=await Exist(MentorRepository)(Email);
    console.log(UserExit);
    if(UserExit===null){ 
        const User =await Register(MentorRepository)(Username,Email,Password);
        if(User){
            const {_id,role}=JSON.parse(JSON.stringify(User))
            const AccessToken=generateAccessToken(_id,role)

            res.status(200).json({message:"Sign Up successfull",User,AccessToken});   
        }else{
            res.status(401).json({message:"Invalid Cridential"})
        }
    }else if(IsGoogle===true){
        const {_id,role}=JSON.parse(JSON.stringify(UserExit))
        const AccesTocken=generateAccessToken(_id,role) 
        res.status(200).json({message:"google signUp Succesfull",UserExit,AccesTocken})
    }else if(UserExit.Email===Email){
        res.status(401).json({message:"Email already Exist"})
    }else if(UserExit.Username===Username){
        res.status(401).json({message:"Username already Exist"})
    }else if(UserExit.Password===Password){
        res.status(401).json({message:"Password already Exist"}) 
    }
   }catch(error){
    res.status(500).json({message:"Internal server error"}) 
   }

}