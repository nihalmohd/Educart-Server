import mongoose, { Schema,Model,Document } from "mongoose";
import {OTPUser, User} from "../../domin/model/User/User"


export type MongoDBOTP = Model<Document<any, any, any> & OTPUser>;

const OTPschema=new Schema({
    Email:{
        type:String,
        required:true,
    },
    OTP:{
        type:String,
        required:true
    },
    OTPStatus:{
        type:Boolean,
        default:true
    }

})
export const OTPSchema:MongoDBOTP=mongoose.connection.model<Document<any, any, any> & OTPUser>("OTP",OTPschema)
