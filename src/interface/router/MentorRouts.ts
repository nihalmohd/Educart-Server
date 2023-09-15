import { Request, Response, Router } from "express";
import { MentorRegister } from "../controller/Mentor/MentorSignUp";
import { MentorLogin } from "../controller/Mentor/MentorLogin";
import { MenotorShowCategory } from "../controller/Mentor/MentorShowCategory";
import { MenotorTakeSubCategory } from "../controller/Mentor/MentorTakeSubCategory";
import { MentorAddCourse } from "../controller/Mentor/MentorCourseAndClass";
import MentorAutherization from "../middlewar/MentorAuthorization";
import { MentorTakeCourseByName } from "../controller/Mentor/MentorTakeCourseByMentor";
import { AddClasses } from "../controller/Mentor/MentorAddClasses";
import { MentorTakeById } from "../controller/Mentor/MenorTakeById";
import { MentorProfileUpdate } from "../controller/Mentor/MentorProfileUpdate";
import { showCourseByid } from "../controller/User/UserShowCourseById";



export const MentorRouter=Router()

MentorRouter.get("/mentor",(req:Request,res:Response)=>{
    console.log ("Mentor working")
    res.status(200).json({status:"done"})
})

MentorRouter.post("/MentorRegister", MentorRegister);
MentorRouter.post("/MentorLogin",MentorLogin)

// mentor category get
MentorRouter.get("/MentorDisplayCategories",MentorAutherization,MenotorShowCategory)
MentorRouter.get("/MentorTakeSubcayegory",MentorAutherization,MenotorTakeSubCategory)
//Mentor  Add Classes 
MentorRouter.get("/MentorTakeCourseByName",MentorAutherization,MentorTakeCourseByName)
MentorRouter.post("/MentorAddCoruseAndClass",MentorAutherization,MentorAddCourse)
MentorRouter.post("/MentorAddClasses",MentorAutherization,AddClasses)
MentorRouter.get("/ProfileTakeMentor",MentorAutherization,MentorTakeById)
MentorRouter.post("/UpdateMentorProfile",MentorAutherization,MentorProfileUpdate)
MentorRouter.get('/takeCoursebyid',MentorAutherization,showCourseByid)
