import { Request, Response } from "express";
import { Login } from "../../app/usecase/user/Login";
import { Userscheam } from "../../infra/database/userModel";
import { UserRepositoryIMP } from "../../infra/repository/userRepository";

const db=Userscheam
const userRepository=UserRepositoryIMP(db)

export const login =async (req:Request,res:Response)=>{
    const {Username}=req.body
    try{
        const logincheck=await Login(userRepository)(Username);
        if(logincheck){
            const {_id,role}=JSON.parse(JSON.stringify(logincheck))
            const AccessToken=generateAccessToken(_id,role)
            res.status(200).json({message:"login succesfull",logincheck,AccessToken}) 
        }else{
            res.status(401).jsonp({message:"User Not Found"})
        }
    }catch (error) {
        res.status(500).json({message:"Internal server Error"})
    }
}
function generateAccessToken(_id: any, role: any) {
    throw new Error("Function not implemented.");
}
