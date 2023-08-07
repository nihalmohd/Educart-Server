import { Request, Response } from "express";
import { Banner } from "../../../infra/database/Banner";
import { BannerRepositoryIMP } from "../../../infra/repository/AdminBannerRepository";
import { HideBanner } from "../../../app/usecase/admin/AdminBannerManagment";


const BannerDb = Banner
const BannerRepository = BannerRepositoryIMP(BannerDb)

export const AdminHideBanner = async (req: Request, res: Response) => {
    try {
        const { _id } = req.body
        const BlockedBanner = await HideBanner(BannerRepository)(_id)
        if (BlockedBanner){
            console.log('Blocked User');
            res.status(200).json({message:"Banner Blocked",BlockedBanner})   
        }else{
            res.status(400).json({message:"Something went wrong"})
        }
    } catch (error) {
       res.status(500).json({message:"Internal server Error"})
    }

}