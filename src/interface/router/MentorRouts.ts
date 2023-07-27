import { Request, Response, Router } from "express";
import { MentorRegister } from "../controller/Mentor/MentorSignUp";
import { MentorLogin } from "../controller/Mentor/MentorLogin";


export const MentorRouter=Router()

MentorRouter.get("/",(req:Request,res:Response)=>{
    console.log ("Mentor working")
    res.status(200).json({status:"done"})
})

MentorRouter.post("/MentorRegister", MentorRegister);
MentorRouter.post("/MentorLogin",MentorLogin)