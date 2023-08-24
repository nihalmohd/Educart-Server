import { Course, UpdateCourseResult } from "../../domin/model/Mentor/CourseModel";
import { MongoDbCourse } from "../database/CourseModel";

export type CourseRepository={
CreateCourse:(CourseDetails:Course)=>Promise<Course>
FindCourseById:(_id:string) =>Promise<void | CourseRepository | UpdateCourseResult>
}

export const MentorCourseIMP = (CourseRepository:MongoDbCourse):CourseRepository =>{
 const CreateCourse = async (CourseDetails:Course):Promise<Course>=>{
    const CreatedCourse = await CourseRepository.create(CourseDetails)
    return CreatedCourse
 }
 const FindCourseById =async (_id:string):Promise<void | CourseRepository | UpdateCourseResult> =>{
    const FoundedCourse = await CourseRepository.findOne({_id:_id})
    return FoundedCourse?.toObject() 
 }
return{
CreateCourse,
FindCourseById
}

}