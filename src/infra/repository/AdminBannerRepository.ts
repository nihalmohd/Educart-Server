import { BannerModel, UpdateBannerResult } from "../../domin/model/Admin/Banner";
import { Banner, MongoDbBanner } from "../database/Banner";
import { ObjectId } from "mongodb";


export type BannerRepository = {
    AddBanner: (BannerData: BannerModel) => Promise<BannerModel>
    FindBanner(): Promise<BannerModel[]>
    HideBanner:(_id:string)=>Promise<BannerModel|void|UpdateBannerResult>
    VisibleBanner:(_id:string)=>Promise<BannerModel|void|UpdateBannerResult>
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
    const HideBanner=async (_id:string):Promise<BannerModel | void | UpdateBannerResult>=>{
            const FalseUpdatedBanner=await BannerModel.updateOne({_id: new ObjectId(_id) },{$set:{Status:false}})
            if(FalseUpdatedBanner.matchedCount>0){
               console.log("banner Blocked ");
               return FalseUpdatedBanner
                
            }
    }
    const VisibleBanner=async (_id:string):Promise<BannerModel | void | UpdateBannerResult>=>{
        const TrueUpdatedBanner=await BannerModel.updateOne({_id: new ObjectId(_id) },{$set:{Status:false}})
        if(TrueUpdatedBanner.matchedCount>0){
           console.log("banner Blocked ");
           return TrueUpdatedBanner
            
        }
}

    return {
        AddBanner,
        FindBanner,
        HideBanner,
        VisibleBanner
    }
}