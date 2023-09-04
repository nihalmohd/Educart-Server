import { Request, Response } from "express";
import { Courses } from "../../../infra/database/CourseModel";
import { MentorCourseIMP } from "../../../infra/repository/MentorCourse";
import { TakeCourseByCategoryBased } from "../../../app/usecase/user/CorseByCategory";
import { TakeCourseByNameBased } from "../../../app/usecase/Mentor/MentorTakeCourseByName";
const CourseDb=Courses
const CourseRepository = MentorCourseIMP(CourseDb)
  
export const MentorTakeCourseByName = async(req: Request, res: Response) => {
    console.log("nihall");   
    try {
        const Mentorname = req.query.Mentorname as string
        console.log(Mentorname); 
        const FoundedCourseByName = await TakeCourseByNameBased(CourseRepository)(Mentorname)
        if(FoundedCourseByName){
          res.status(200).json({message:"Course got by id is successfull",FoundedCourseByName})
        }else{
          res.status(400).json({message:"Something went wrong"})
        }

    } catch (error) {
        res.status(501).json({message:"Internal server Error"})
    }
  
}