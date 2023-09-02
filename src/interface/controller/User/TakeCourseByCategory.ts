import { Request, Response } from "express";
import { Courses } from "../../../infra/database/CourseModel";
import { MentorCourseIMP } from "../../../infra/repository/MentorCourse";
import { TakeCourseByCategoryBased } from "../../../app/usecase/user/CorseByCategory";
const CourseDb=Courses
const CourseRepository = MentorCourseIMP(CourseDb)
  
export const TakeCourseByCategory = async (req:Request,res:Response) =>{
    const Category = req.query.Category as string
    console.log(Category,"paramsn id kittiyo");
    try {
        const GotCoureseByCategory =await TakeCourseByCategoryBased(CourseRepository)(Category)
        if(GotCoureseByCategory){
            res.status(200).json({message:"Category Bassed Course is Successfully Got",GotCoureseByCategory})
        }else{
            res.status(400).json({message:"Something went Wrong"})
        }
    } catch (error) {
        res.status(501).json({message:"Internal Server Error"})
    }
}