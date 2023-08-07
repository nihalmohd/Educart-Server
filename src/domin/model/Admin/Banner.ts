import { Document } from "mongoose";
import { ObjectId } from 'bson'; 

export interface BannerModel{
   Image:string,
   Content:string
}

export interface UpdateBannerResult {
    acknowledged: boolean;
    modifiedCount: number;
    upsertedId: ObjectId | null;
    upsertedCount: number;
    matchedCount: number;
  }