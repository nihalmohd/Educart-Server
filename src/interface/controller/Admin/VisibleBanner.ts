import { Request, Response } from "express";
import { Banner } from "../../../infra/database/Banner";
import { BannerRepositoryIMP } from "../../../infra/repository/AdminBannerRepository";
import {  VisibleBanner } from "../../../app/usecase/admin/AdminBannerManagment";


const BannerDb = Banner
const BannerRepository = BannerRepositoryIMP(BannerDb)

export const AdminVisibleBanner = async (req: Request, res: Response) => {
    try {
        const { _id } = req.body
        const BlockedBanner = await VisibleBanner(BannerRepository)(_id)
        if (BlockedBanner){
            res.status(200).json({message:"Banner UnBlocked",BlockedBanner})   
        }else{
            res.status(400).json({message:"Something went wrong"})
        }
    } catch (error) {
       res.status(500).json({message:"Internal server Error"})
    }

}