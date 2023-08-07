import { BannerRepository } from "../../../infra/repository/AdminBannerRepository";

export const HideBanner=(BannerRepository:BannerRepository)=>async(_id:string)=>{
    const falseUpdated =await BannerRepository.HideBanner(_id)
    return falseUpdated
}
export const VisibleBanner=(BannerRepository:BannerRepository)=>async(_id:string)=>{
    const falseUpdated =await BannerRepository.VisibleBanner(_id)
    return falseUpdated
}