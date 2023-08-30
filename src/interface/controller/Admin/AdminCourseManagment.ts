import { Request, Response } from "express";
import { TakeCourse } from "../../../app/usecase/Mentor/mentorTakeCourse";
import { Courses } from "../../../infra/database/CourseModel";
import { MentorCourseIMP } from "../../../infra/repository/MentorCourse";

const CourseDb =Courses 
const CourseRepository = MentorCourseIMP(CourseDb)

export const AdminBlaockCourse =async (req:Request,res:Response) =>{
    const {_id} = req.body 
    try {
       
    } catch (error) {
        res.status(501).json({message:"Internal Server Error"})
    }
}
export const AdminUnblaockCourse =async (req:Request,res:Response) =>{
    const {_id} = req.body 
    try {
       
    } catch (error) {
        res.status(501).json({message:"Internal Server Error"})
    }
}

