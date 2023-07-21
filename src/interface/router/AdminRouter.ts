import { Request, Response, Router } from "express";
import {Adminlogin} from "../controller/Admin/AdminLogin"
import { DisplayUsers } from "../controller/Admin/Display-Users";


export const AdminRouter=Router()

AdminRouter.get("/Admin",(req:Request,res:Response)=>{
    console.log ("working")
    res.status(200).json({status:"done"})
})

// post methods

AdminRouter.post("/Login",Adminlogin);
AdminRouter.post("/getUsers",DisplayUsers)