import { Request, Response } from "express";
import {AdminLogin  } from "../../../app/usecase/admin/AdminLogin";
import { adminSchema } from "../../../infra/database/AdminModel";
import { AdminRepositoryIMP } from "../../../infra/repository/AdminRepository";
import { generateAccessToken } from "../../../Utils/JwtAuthetication";


const db = adminSchema;
const AdminRepository = AdminRepositoryIMP(db);


export const Adminlogin =async (req:Request,res:Response)=>{
    const {Email,Password}=req.body
    console.log(Email,Password);
    try{
        const Adminlogincheck=await AdminLogin(AdminRepository)(Email,Password);
        console.log(Adminlogincheck,"fllllllllllllllll");
        if(Adminlogincheck===null){  
            res.status(401).json({message:"Invalid credential"})
        }else {
            const {_id,role}=JSON.parse(JSON.stringify(Adminlogincheck))
            const AdminAccessToken=generateAccessToken(_id,role)
            res.status(200).json({message:" Admin login succesfull",Adminlogincheck,AdminAccessToken})
    }
        
    }catch (error) {
        res.status(500).json({message:"Internal server Error"})
    }
}

