import { Course, UpdateCourseResult } from "../../domin/model/Mentor/CourseModel";
import { MongoDbCourse } from "../database/CourseModel";

export type CourseRepository={
CreateCourse:(CourseDetails:Course)=>Promise<Course>
FindCourseById:(_id:string) =>Promise<void | CourseRepository | UpdateCourseResult>
FindCourse():Promise<Course[]>
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
return{
CreateCourse,
FindCourseById,
FindCourse
}  
}