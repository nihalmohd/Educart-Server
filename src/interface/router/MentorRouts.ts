import { Request, Response, Router } from "express";
import { MentorRegister } from "../controller/Mentor/MentorSignUp";
import { MentorLogin } from "../controller/Mentor/MentorLogin";
import { MenotorShowCategory } from "../controller/Mentor/MentorShowCategory";
import { MenotorTakeSubCategory } from "../controller/Mentor/MentorTakeSubCategory";
import { MentorAddCourse } from "../controller/Mentor/MentorCourseAndClass";



export const MentorRouter=Router()

MentorRouter.get("/",(req:Request,res:Response)=>{
    console.log ("Mentor working")
    res.status(200).json({status:"done"})
})

MentorRouter.post("/MentorRegister", MentorRegister);
MentorRouter.post("/MentorLogin",MentorLogin)

// mentor category get
MentorRouter.get("/MentorDisplayCategories",MenotorShowCategory)
MentorRouter.get("/MentorTakeSubcayegory",MenotorTakeSubCategory)
MentorRouter.post("/MentorAddCoruseAndClass",MentorAddCourse)