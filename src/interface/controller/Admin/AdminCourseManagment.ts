import { Request, Response } from "express";
import { TakeCourse } from "../../../app/usecase/Mentor/mentorTakeCourse";
import { Courses } from "../../../infra/database/CourseModel";
import { MentorCourseIMP } from "../../../infra/repository/MentorCourse";
import { BlockCourse } from "../../../app/usecase/admin/AdminBlockCourse";
import { UnblockCourse } from "../../../app/usecase/admin/AdminUnblockCourse";

const CourseDb =Courses 
const CourseRepository = MentorCourseIMP(CourseDb)

export const AdminBlaockCourse =async (req:Request,res:Response) =>{
    const {_id} = req.body 
    
    try {
        const BlockedkCourse = await BlockCourse(CourseRepository)(_id)
        if(BlockedkCourse){
            console.log(BlockedkCourse);
            
            res.status(200).json({message:"courseBlocked Successfull",BlockedkCourse})
        }else{
            res.status(400).json({message:"Something went wrong"})
        } 
    } catch (error) {
        res.status(501).json({message:"Internal Server Error"})
    }
}

export const AdminUnblaockCourse =async (req:Request,res:Response) =>{
    const {_id} = req.body 
    try {
        const UnblockedkCourse = await UnblockCourse(CourseRepository)(_id)
        if(UnblockedkCourse){
            res.status(200).json({message:"course Unblocked Successfull",UnblockedkCourse})
        }else{
            res.status(400).json({message:"Something went wrong"})
        } 
       
    } catch (error) {
        res.status(501).json({message:"Internal Server Error"})
    }
}

