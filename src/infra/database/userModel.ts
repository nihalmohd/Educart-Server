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
    IsGoogle:{
        type:Boolean,
        default:false
    },
    // courses : {
    //     type:mongoose.Schema.Types.ObjectId
    //     ref:"Courses",
    //     type : [Object]
    // },
    courses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Courses",
        }
    ],
    Status:{
        type:Boolean,
        default:true
    },
    isOtp:{
        type:Boolean,
        default:false
    },
    ProfileImage:{
        type:String,
        default:"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png"
    }


})
export const Userscheam:MongoDBUser=mongoose.connection.model<Document<any, any, any> & User>("user",userSchema)
