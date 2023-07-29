import { Request, Response } from "express";
import { Userscheam } from "../../../infra/database/userModel";
import { UserRepositoryIMP } from "../../../infra/repository/userRepository";
import { Register } from "../../../app/usecase/user/Register";
import { Exist } from "../../../app/usecase/user/Exist";
import { generateAccessToken} from "../../../Utils/JwtAuthetication";
const db=Userscheam
const userRepository=UserRepositoryIMP(db) 


export const register=async(req:Request,res:Response)=>{
    const {Username,Email,Password,IsGoogle}=req.body
    console.log(Username,Email,Password,IsGoogle)
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
    }else if(IsGoogle){
        const {_id,role} =JSON.parse(JSON.stringify(UserExit))
        console.log(_id,role +"nihalljdkfjlsdjflksdjfjsdf");
        const AccessToken=generateAccessToken(_id,role)
        res.status(200).json({message:"sucessfull",UserExit,AccessToken})
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



