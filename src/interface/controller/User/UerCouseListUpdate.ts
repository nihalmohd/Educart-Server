

import { Request, Response } from "express";
import { Login } from "../../../app/usecase/user/Login";
import { Userscheam } from "../../../infra/database/userModel";
import { UserRepositoryIMP } from "../../../infra/repository/userRepository";
import { generateAccessToken } from "../../../Utils/JwtAuthetication";
import { User } from "../../../domin/model/User/User";
import { TakeUserById } from "../../../app/usecase/user/TakeUserById";
import { UpdateuserProfile } from "../../../app/usecase/user/Updateuser";
import { UpdatedUserCourseArray } from "../../../app/usecase/user/UpdateCourseArray";

interface CustomRequest extends Request {
    userInfo?: { id: string; role: string };
  }

const db=Userscheam
const userRepository=UserRepositoryIMP(db)

export const UerCouseListUpdate =async (req:CustomRequest,res:Response)=>{
try {
    const user = req.userInfo
    // const _id =user?.id
    const _id ="64f715398d88778acc9080c6"
    console.log(_id);
    
    const CourseId = req.body.CourseId
    console.log(CourseId,"bodry",req.body);
    const UpdatedCourseId = await UpdatedUserCourseArray(userRepository)(_id as string,CourseId)
    if(UpdatedCourseId){
        res.status(200).json({message:"successfull Updated",UpdatedCourseId})
    }else{
        res.status(401).json({message:"something went wrong"})
    }
} catch (error) {
    res.json({message:"Internal server Error"})
}
}