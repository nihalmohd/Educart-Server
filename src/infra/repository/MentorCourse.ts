import { UpdateWriteOpResult } from "mongoose";
import { Course, UpdateCourseResult } from "../../domin/model/Mentor/CourseModel";
import { MongoDbCourse } from "../database/CourseModel";
import { ObjectId,} from "mongodb";


export type CourseRepository={
CreateCourse:(CourseDetails:Course)=>Promise<Course>
FindCourseById:(_id:string) =>Promise<void | CourseRepository | UpdateCourseResult>
FindCourse():Promise<Course[]>
BlockCourseByid:(_id:string)=>Promise<void | CourseRepository | UpdateCourseResult |UpdateWriteOpResult>
UnblacockCourseByid:(_id:string)=>Promise<void | CourseRepository | UpdateCourseResult |UpdateWriteOpResult>
}

export const MentorCourseIMP = (CourseRepository:MongoDbCourse):CourseRepository =>{
 const CreateCourse = async (CourseDetails:Course):Promise<Course>=>{
    const CreatedCourse = await CourseRepository.create(CourseDetails)
    return CreatedCourse
 }
 const FindCourseById =async (_id:string):Promise<void | CourseRepository | UpdateCourseResult> =>{
    const FoundedCourseByI = await CourseRepository.findOne({_id:_id})
    return FoundedCourseByI?.toObject() 
 }
 const FindCourse = async ():Promise<Course[]>=>{
   const FoundedCourse = await CourseRepository.find()
   return FoundedCourse
 }
 const BlockCourseByid =async (_id:string):Promise<void | CourseRepository | UpdateCourseResult | UpdateWriteOpResult> =>{
    const BlockedCouuse =  await CourseRepository.updateOne({_id:new ObjectId(_id)},{$set:{Status:false}})
    return BlockedCouuse
 }
 const UnblacockCourseByid =async (_id:string):Promise<void | CourseRepository | UpdateCourseResult|UpdateWriteOpResult> =>{
   const UnblockedCourse = await CourseRepository.updateOne({_id:new ObjectId(_id)},{$set:{Status:true}})
   return UnblockedCourse
 }
return{
CreateCourse,
FindCourseById,
FindCourse,
BlockCourseByid,
UnblacockCourseByid

}  
}