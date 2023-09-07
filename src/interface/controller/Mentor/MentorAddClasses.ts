
import { Request, Response } from "express";
import { Courses } from "../../../infra/database/CourseModel";
import { MentorCourseIMP } from "../../../infra/repository/MentorCourse";
import {MentorAddCourseWithClass} from "../../../app/usecase/Mentor/MentorAddCourse"
import { MentorAddClassesById } from "../../../app/usecase/Mentor/MentorAddClassesById";
const CourseDb=Courses
const CourseRepository = MentorCourseIMP(CourseDb)

export const AddClasses =async(req:Request,res:Response) =>{
    console.log(req.body,"req.body");
    const {_id} =req.body
    const {Classdatas} =req.body 
    // const {_id ,Classname,ClassDescription,ClassVideoLocation} =Classdatas
    try {
        const ClassAddedCourse =await MentorAddClassesById(CourseRepository)(_id as string,Classdatas as object)
        if(ClassAddedCourse){
            res.status(200).json({message:"Class Added Successfull",ClassAddedCourse})
        }else{
            res.status(401).json({message:"something went wrong"})
        }
    } catch (error) {
        res.status(501).json({message:"internal server error"})
    }
}