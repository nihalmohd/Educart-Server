import { Request, Response } from "express";

 export const MentorAddCourse = (req:Request,res:Response) =>{
    const {CourseTitle,CourseDescription,Learnig,includes,price,ThubmnailImages,category,Subcategory,DemoVideo,classname,classDescription,ClassVideo} = req.body
    console.log(CourseTitle,CourseDescription,Learnig,includes,price,ThubmnailImages,category,Subcategory,DemoVideo,classname,classDescription,ClassVideo,"add couse");
    
}