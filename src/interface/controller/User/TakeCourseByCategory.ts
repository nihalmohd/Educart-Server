import { Request, Response } from "express";
import { Courses } from "../../../infra/database/CourseModel";
import { MentorCourseIMP } from "../../../infra/repository/MentorCourse";
import { TakeCourseByCategoryBased } from "../../../app/usecase/user/CorseByCategory";
const CourseDb=Courses
const CourseRepository = MentorCourseIMP(CourseDb)
  
export const TakeCourseByCategory = async(req: Request, res: Response) => {
    console.log("nihall");   
    try {
        const Category = req.query.Category as string
        console.log(Category);
        
        const FoundedCourseByCategory = await TakeCourseByCategoryBased(CourseRepository)(Category)
        if(FoundedCourseByCategory){
          res.status(200).json({message:"Course got by id is successfull",FoundedCourseByCategory})
        }else{
          res.status(400).json({message:"Something went wrong"})
        }

    } catch (error) {
        res.status(501).json({message:"Internal server Error"})
    }
  
}