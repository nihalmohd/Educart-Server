import { BannerRepository } from "../../../infra/repository/AdminBannerRepository"



export const displayBanner=(BannerRepository:BannerRepository)=>{
    const displayBannerGot =BannerRepository.FindBanner()
    return displayBannerGot
}