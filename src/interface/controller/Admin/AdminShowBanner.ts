import { Request, Response } from "express"
import { Banner } from "../../../infra/database/Banner"
import { BannerRepositoryIMP } from "../../../infra/repository/AdminBannerRepository"
import { displayBanner } from "../../../app/usecase/admin/AdminDisplayBanner"


const BannerDb=Banner
const BannerRepository=BannerRepositoryIMP(BannerDb)

export const AdminShowBanner=async (req:Request,res:Response)=>{
    try {
        const Banner =await displayBanner(BannerRepository)
        if (Banner) {
           res.status(200).json({message:"Banner Founded Succesfully",Banner})  
        }else{
            res.status(400).json({message:"Banner Did't got here ERROR"})
        }
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
}