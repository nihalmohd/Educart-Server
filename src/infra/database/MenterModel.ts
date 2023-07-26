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
    Status:{
        type:Boolean,
        default:true
    }

})
export const mentorSchema:MongoDBMentor=mongoose.connection.model<Document<any, any, any> & Mentor>("Mentor",MentorSchema)
