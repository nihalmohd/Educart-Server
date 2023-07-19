import mongoose, { Schema,Model,Document } from "mongoose";
import {User} from "../../domin/model/User/User"


export type MongoDBUser = Model<Document<any, any, any> & User>;

const userSchema=new Schema({
    Username:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"User"
    },
    Status:{
        type:Boolean,
        default:true
    }

})
export const Userscheam:MongoDBUser=mongoose.connection.model<Document<any, any, any> & User>("user",userSchema)
