import { Request, Response } from "express";
import { Courses } from "../../../infra/database/CourseModel";

const CourseDb=Courses


 export const MentorAddCourse = (req:Request,res:Response) =>{
    try {
        const {courseTitle,courseDescription,courseLearning,courseIncludes,coursePrice,ThubmnailImages,SelectedCategory,SelectedSubCategory,DemoVideoLocation,className,ClassDescription,ClassVideoLocation} = req.body
        console.log(courseTitle,courseDescription,courseLearning,courseIncludes,coursePrice,ThubmnailImages,SelectedCategory,SelectedSubCategory,DemoVideoLocation,className,ClassVideoLocation,ClassDescription,"add couse");  
    } catch (error) {
      res.status(500).json({message:"Internal server Error"})  
    }
    
}