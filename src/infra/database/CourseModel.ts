import mongoose, { Schema,Model,Document } from "mongoose";
import {Course} from "../../domin/model/Mentor/CourseModel"


export type MongoDbCourse = Model<Document<any, any, any> & Course>;

const CourseSchema=new Schema({
   CourseTitle:{
     type:String,
     required:true
   },
   CourseDescription:{
    type:String,
    required:true
   },
   CourseLearning:{
    type:String,
    required:true
   },
   CourseIncludes:{
    type:String,
    required:true
   },
   CoursePrice:{
    type:Number,
    required:true
   }, 
   Thumbnail:{
    type:String,
    required:true
   },
   CourseCategory:{
    type:String,
    required:true
   },
   CourseSubcategory:{
    type:String,
    required:true
   },
   CourseVideo:{
    type:String,
    required:true
   },
   class:{
    type:[Object],
    required:true
   }
})
export const Courses:MongoDbCourse=mongoose.connection.model<Document<any, any, any> & Course>("Courses",CourseSchema)