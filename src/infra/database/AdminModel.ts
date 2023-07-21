import mongoose, { Schema,Model,Document } from "mongoose";
import {Admin} from "../../domin/model/Admin/Admin"


export type MongoDBAdmin = Model<Document<any, any, any> & Admin>;

const AdminSchema=new Schema({
    Email:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"Admin"
    },
    Status:{
        type:Boolean,
        default:true
    }

})
export const adminSchema:MongoDBAdmin=mongoose.connection.model<Document<any, any, any> & Admin>("Admins",AdminSchema)