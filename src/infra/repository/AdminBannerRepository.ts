import { BannerModel } from "../../domin/model/Admin/Banner";
import { MongoDbBanner } from "../database/Banner";


export type BannerRepository = {
    AddBanner: (BannerData: BannerModel) => Promise<BannerModel>
};

export const BannerRepositoryIMP = (BannerModel: MongoDbBanner): BannerRepository => {
    const AddBanner = async (BannerData: BannerModel) => {
        console.log(BannerData);
        const AddedBanner = await BannerModel.create(BannerData)
        return AddedBanner.toObject()
    }

    return {
        AddBanner
    }
}