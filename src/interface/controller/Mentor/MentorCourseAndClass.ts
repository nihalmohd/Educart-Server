import { Request, Response } from "express";
import { Courses } from "../../../infra/database/CourseModel";
import { MentorCourseIMP } from "../../../infra/repository/MentorCourse";
import {MentorAddCourseWithClass} from "../../../app/usecase/Mentor/MentorAddCourse"
const CourseDb=Courses
const CourseRepository = MentorCourseIMP(CourseDb)


 export const MentorAddCourse = (req:Request,res:Response) =>{
    try {  
        const {courseTitle, courseDescription, courseLearning, courseIncludes, coursePrice, ThumbnailLocation, SelectedCategory, SelectedSubCategory, DemoVideoLocation, className, ClassDescription, classVideoLocation} = req.body
        console.log(courseTitle, courseDescription, courseLearning, courseIncludes, coursePrice, ThumbnailLocation, SelectedCategory, SelectedSubCategory, DemoVideoLocation, className, ClassDescription, classVideoLocation,"add couses 12323122343"); 
          const UploadeCourse = MentorAddCourseWithClass(CourseRepository)(courseTitle, courseDescription, courseLearning, courseIncludes, coursePrice, ThumbnailLocation, SelectedCategory, SelectedSubCategory, DemoVideoLocation, className, ClassDescription, classVideoLocation)
          if(!UploadeCourse){
            res.status(401).json({message:"Something went worong"})
          }
          res.status(200).json({message:"Course Uploaded Successfull",UploadeCourse})
    } catch (error) {
      res.status(500).json({message:"Internal server Error"})  
    }
    
}