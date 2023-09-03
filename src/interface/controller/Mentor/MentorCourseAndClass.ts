import { Request, Response } from "express";
import { Courses } from "../../../infra/database/CourseModel";
import { MentorCourseIMP } from "../../../infra/repository/MentorCourse";
import {MentorAddCourseWithClass} from "../../../app/usecase/Mentor/MentorAddCourse"
const CourseDb=Courses
const CourseRepository = MentorCourseIMP(CourseDb)
 export const MentorAddCourse =async (req:Request,res:Response) =>{
   const {courseTitle, courseDescription, courseLearning, courseIncludes, coursePrice, ThumbnailLocation, SelectedCategory, SelectedSubCategory, DemoVideoLocation, className, ClassDescription, classVideoLocation,Username} = req.body
   console.log(coursePrice,SelectedCategory,SelectedSubCategory);
   const Mentorname=Username
    try {  
        // console.log(courseTitle, courseDescription, courseLearning, courseIncludes, coursePrice, ThumbnailLocation, SelectedCategory, SelectedSubCategory, DemoVideoLocation, className, ClassDescription, classVideoLocation,Mentorname,"add couses 12323122343");
        console.log(SelectedCategory,SelectedSubCategory,coursePrice,"is getting check i want to understand");
          const UploadeCourse = await MentorAddCourseWithClass(CourseRepository)(courseTitle, courseDescription, courseLearning, courseIncludes, coursePrice, SelectedCategory, ThumbnailLocation, SelectedSubCategory, DemoVideoLocation, className, ClassDescription, classVideoLocation,Mentorname)
          if( UploadeCourse){
            res.status(200).json({message:"Course Uploaded Successfull",UploadeCourse})
          }else{
            res.status(401).json({message:"Something went worong"})
          }
    } catch (error) {
      res.status(500).json({message:"Internal server Error"})  
    }
    
}