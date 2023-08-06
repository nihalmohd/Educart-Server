import { BannerModel } from "../../../domin/model/Admin/Banner"
import { BannerRepository, } from "../../../infra/repository/AdminBannerRepository"


export const Addbanner=(BannerRepository:BannerRepository)=>async(Image:string,Content:string)=>{
console.log(Image,Content,"usecasil yethiiii");
   const NewBanner:BannerModel={
    Image,
    Content
   }
   const CreatedBanner=await BannerRepository.AddBanner(NewBanner)
   return CreatedBanner
}