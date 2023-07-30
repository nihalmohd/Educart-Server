import { Request, Response } from "express";
import { mentorSchema } from "../../../infra/database/MenterModel"
import { UserRepositoryIMP } from "../../../infra/repository/userRepository"
import { Login } from "../../../app/usecase/user/Login";
import { generateAccessToken } from "../../../Utils/JwtAuthetication";



const Mentordb=mentorSchema
const MentorRepository=UserRepositoryIMP(Mentordb)

export const MentorLogin=async(req:Request,res:Response)=>{
  const {Username,Password}=req.body
  console.log(Username,Password);
  try {
    const Mentorlogincheck=await Login(MentorRepository)(Username,Password);
    console.log(Mentorlogincheck,"MentorLoginCheck");
        if(Mentorlogincheck===null){
            res.status(401).jsonp({message:"User Not Found"})
        }else if(Mentorlogincheck.Status) {
            const {_id,role}=JSON.parse(JSON.stringify(Mentorlogincheck))
             console.log("logeeed");
            const AccessToken=generateAccessToken(_id,role)
            res.status(200).json({message:"login succesfull",Mentorlogincheck,AccessToken}) 
        }else{
            res.status(401).json({message:"Unauthorized Request"})
        }
    }catch (error) {
        res.status(500).json({message:"Internal server Error"})
    }
}