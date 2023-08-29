import { Request, Response } from "express";
import { TakeCourseByid } from "../../../app/usecase/Mentor/MentorTakeCourseById";
import { Courses } from "../../../infra/database/CourseModel";
import { MentorCourseIMP } from "../../../infra/repository/MentorCourse";


const CourseDb =Courses 
const CourseRepository = MentorCourseIMP(CourseDb)

export const showCourseByid = async(req: Request, res: Response) => {
    console.log("nihall");
    
    try {
        const _id = req.query._id as string
        const FoundedCourseByid = await TakeCourseByid(CourseRepository)(_id)
        if(FoundedCourseByid){
          res.status(200).json({message:"Course got by id is successfull",FoundedCourseByid})
        }else{
          res.status(400).json({message:"Something went wrong"})
        }

    } catch (error) {
        res.status(501).json({message:"Internal server Error"})
    }
  
}