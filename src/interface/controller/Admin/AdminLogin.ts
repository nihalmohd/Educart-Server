import { Request, Response } from "express";
import {AdminLogin  } from "../../../app/usecase/admin/AdminLogin";
import { adminSchema } from "../../../infra/database/AdminModel";
import { AdminRepositoryIMP } from "../../../infra/repository/AdminRepository";
import { generateAccessToken } from "../../../Utils/JwtAuthetication";
import { Admin } from "../../../domin/model/Admin/Admin";


const db = adminSchema;
const AdminRepository = AdminRepositoryIMP(db);


export const Adminlogin =async (req:Request,res:Response)=>{
    const {Email,Password}:Admin=req.body
    try{
        const Adminlogincheck=await AdminLogin(AdminRepository)(Email,Password);
        if(Adminlogincheck){
            const {_id,role}=JSON.parse(JSON.stringify(Adminlogincheck))
            const AdminAccessToken=generateAccessToken(_id,role)
            res.status(200).json({message:" Admin login succesfull",Adminlogincheck,AdminAccessToken})
        }else{
            res.status(401).jsonp({message:"User Not Found"})
        }
    }catch (error) {
        res.status(500).json({message:"Internal server Error"})
    }
}

