import { BannerModel } from "../../domin/model/Admin/Banner";
import { Banner, MongoDbBanner } from "../database/Banner";


export type BannerRepository = {
    AddBanner: (BannerData: BannerModel) => Promise<BannerModel>
    FindBanner(): Promise<BannerModel[]>
};

export const BannerRepositoryIMP = (BannerModel: MongoDbBanner): BannerRepository => {
    const AddBanner = async (BannerData: BannerModel) => {
        console.log(BannerData);
        const AddedBanner = await BannerModel.create(BannerData)
        return AddedBanner.toObject()
    }
    const FindBanner= async ():Promise<BannerModel[]>=>{
         const foundBanner=await BannerModel.find()
      return foundBanner
    }

    return {
        AddBanner,
        FindBanner
    }
}