
import { Request, Response } from "express";
import { Courses } from "../../../infra/database/CourseModel";
import { MentorCourseIMP } from "../../../infra/repository/MentorCourse";
import {MentorAddCourseWithClass} from "../../../app/usecase/Mentor/MentorAddCourse"
const CourseDb=Courses
const CourseRepository = MentorCourseIMP(CourseDb)

export const AddClasses =(req:Request,res:Response) =>{
    console.log(req.body);
    const {Classdatas} =req.body 
    try {
        const ClassAddedCourse = ""
        if(ClassAddedCourse){
            res.status(200).json({message:"Class Added Successfull",ClassAddedCourse})
        }else{
            res.status(401).json({message:"something went wrong"})
        }
    } catch (error) {
        res.status(501).json({message:"internal server error"})
    }
}