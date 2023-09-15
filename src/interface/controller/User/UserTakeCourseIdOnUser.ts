import { Request, Response } from "express";
import { Login } from "../../../app/usecase/user/Login";
import { Userscheam } from "../../../infra/database/userModel";
import { UserRepositoryIMP } from "../../../infra/repository/userRepository";
import { generateAccessToken } from "../../../Utils/JwtAuthetication";
import { User } from "../../../domin/model/User/User";
import { TakeUserById } from "../../../app/usecase/user/TakeUserById";
import { UpdatedCourseId } from "../../../app/usecase/user/UpdatedCourseId";

interface CustomRequest extends Request {
    userInfo?: { id: string; role: string };
  }

const db=Userscheam
const userRepository=UserRepositoryIMP(db)

export const UserTakeCourseIdOnUser = async (req:CustomRequest,res:Response) =>{
    const user =req.userInfo
    const _id = user?.id
    const CourseId = req.body.CourseId as string
    console.log(CourseId,_id);
    
    try {
        const FoundedCoursidonUser = await UpdatedCourseId(userRepository)(_id as string,CourseId)
        if(FoundedCoursidonUser){
            res.status(200).json({message:"Courses id Sucessfully goted",FoundedCoursidonUser})
        }else{
            res.status(401).json({message:"Something went wrong"})
        }
    } catch (error) {
        res.status(500).json({message:"Internal server error"})   
    }
}