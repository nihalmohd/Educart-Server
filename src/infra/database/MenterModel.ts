import mongoose, { Schema,Model,Document } from "mongoose";
import { Mentor } from "../../domin/model/Mentor/Mentor";


export type MongoDBMentor = Model<Document<any, any, any> & Mentor>;

const MentorSchema=new Schema({
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
        default:"Mentor"
    },
    IsGoogle:{
        type:String,
        default:false
    },
    Status:{
        type:Boolean,
        default:true
    },
    ProfileImage:{
        type:String,
        default:"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png"
    }

})
export const mentorSchema:MongoDBMentor=mongoose.connection.model<Document<any, any, any> & Mentor>("Mentor",MentorSchema)
