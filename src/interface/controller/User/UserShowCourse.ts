import { Request, Response } from "express";
import { TakeCourse } from "../../../app/usecase/Mentor/mentorTakeCourse";
import { Courses } from "../../../infra/database/CourseModel";
import { MentorCourseIMP } from "../../../infra/repository/MentorCourse";

const CourseDb =Courses 
const CourseRepository = MentorCourseIMP(CourseDb)

export const showCourse =async (req:Request,res:Response) =>{
    try {
        const Getcourse = await TakeCourse(CourseRepository)
        if(Getcourse){
            res.status(200).json({message:"Counses Founded Successfull",Getcourse})
        }else{
       res.status(401).json({message:"something went wrong"})
        }
    } catch (error) {
        res.status(501).json({message:"Internal Server Error"})
    }
}

