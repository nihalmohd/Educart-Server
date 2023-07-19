import {Request, Response, Router} from "express"
import { login, register } from "../controller/usercontorller";

export const userRouter=Router()
 
userRouter.get("/",(req:Request,res:Response)=>{
    console.log("working");
    res.status(200).json({status:"done"})
})
//Post sign Up
userRouter.post("/user/register",register)
userRouter.post("/user/login",login)

