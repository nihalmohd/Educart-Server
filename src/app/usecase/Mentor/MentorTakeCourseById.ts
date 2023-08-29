import { CourseRepository } from "../../../infra/repository/MentorCourse";


export const TakeCourseByid =(CourseRepository:CourseRepository)=>(_id:string)=>{
   const getCourseByid =CourseRepository.FindCourseById(_id)
   if(getCourseByid){
    return getCourseByid
   }
}