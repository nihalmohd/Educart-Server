import { Request, Response } from "express";
import { Banner } from "../../../infra/database/Banner";
import { BannerRepositoryIMP } from "../../../infra/repository/AdminBannerRepository";
import { Addbanner } from "../../../app/usecase/admin/AdminAddBanner";


const BannerDb=Banner
const BannerRepository=BannerRepositoryIMP(BannerDb)

export const AdminCreateBanner=async(req:Request,res:Response)=>{
    console.log("hloooooo");
    
    try {
        const {Image,Content}=req.body
        console.log(req.body);
        
        console.log(Content,Image,"contor");                                                                                        ``
        
        const BannerData=await Addbanner(BannerRepository)(Image,Content)
        if(BannerData){
            res.status(200).json({message:"Banner Uploaded"})
        }else{
            res.status(400).json({message:"Something Went Wrong"})
        }
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
}