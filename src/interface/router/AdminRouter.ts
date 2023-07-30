import { Request, Response, Router } from "express";
import {Adminlogin} from "../controller/Admin/AdminLogin"
import { DisplayUsers } from "../controller/Admin/Display-Users";
import { BlockUserReq } from "../controller/Admin/AdminBlockUser";
import { UnBlockUserReq } from "../controller/Admin/AdminUnblockUser";


export const AdminRouter=Router()

AdminRouter.get("/Admin",(req:Request,res:Response)=>{
    console.log ("working")
    res.status(200).json({status:"done"})
})

// post methods

AdminRouter.post("/Login",Adminlogin);
AdminRouter.post("/getUsers",DisplayUsers)
AdminRouter.post("/blockUser",BlockUserReq)
AdminRouter.post("/UnblockUser",UnBlockUserReq)