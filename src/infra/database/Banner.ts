import mongoose, { Schema,Model,Document } from "mongoose";
import { BannerModel } from "../../domin/model/Admin/Banner";


export type MongoDbBanner = Model<Document<any, any, any> & BannerModel>;

const BannerSchema=new Schema({
    Image:{
        type:String,
        require:true
    },
    Content:{
        type:String,
        required:true
    },
    Status:{
        type:Boolean,
        default:true
    }

})
export const Banner:MongoDbBanner=mongoose.connection.model<Document<any, any, any> & BannerModel>("Banners",BannerSchema)