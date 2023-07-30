import { Request, Response } from "express";
import { Login } from "../../../app/usecase/user/Login";
import { Userscheam } from "../../../infra/database/userModel";
import { UserRepositoryIMP } from "../../../infra/repository/userRepository";
import { generateAccessToken } from "../../../Utils/JwtAuthetication";
import { User } from "../../../domin/model/User/User";


const db=Userscheam
const userRepository=UserRepositoryIMP(db)

export const login =async (req:Request,res:Response)=>{
    const {Username,Password}=req.body
    console.log(Username,Password + "Login test");
    
    try{
        const logincheck=await Login(userRepository)(Username,Password);
        if(logincheck){
             if(logincheck.Status){
            console.log(logincheck ,"logincheckKitii");
            const {_id,role}=JSON.parse(JSON.stringify(logincheck))
             console.log("logeeed");
            const AccessToken=generateAccessToken(_id,role)
            res.status(200).json({message:"login succesfull",logincheck,AccessToken}) 
        }else{
            res.status(401).json({message:"Unauthorized Request"})
        }
        }else{
            res.status(401).jsonp({message:"User Not Found"})
        }
    }catch (error) {
        res.status(500).json({message:"Internal server Error"})
    }
}


