import { Request, Response, Router } from "express";
import { MentorRegister } from "../controller/Mentor/MentorSignUp";


export const MentorRouter=Router()

MentorRouter.get("/",(req:Request,res:Response)=>{
    console.log ("Mentor working")
    res.status(200).json({status:"done"})
})

MentorRouter.post("/MentorLogin", MentorRegister);