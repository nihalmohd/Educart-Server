import { Request, Response } from "express";
import { Courses } from "../../../infra/database/CourseModel";

const CourseDb=Courses


 export const MentorAddCourse = (req:Request,res:Response) =>{
    try {
        const {CourseTitle,CourseDescription,Learnig,includes,price,ThubmnailImages,category,Subcategory,DemoVideo,classname,classDescription,ClassVideo} = req.body
        console.log(CourseTitle,CourseDescription,Learnig,includes,price,ThubmnailImages,category,Subcategory,DemoVideo,classname,classDescription,ClassVideo,"add couse");  
    } catch (error) {
      res.status(500).json({message:"Internal server Error"})  
    }
    
}