import { CourseRepository } from "../../../infra/repository/MentorCourse";
export const MentorAddClassesById =(CourseRepository:CourseRepository)=>(_id:string,Classdatas:object)=>{
   const getCourseByid =CourseRepository.MentorAddClasses(_id,Classdatas)
   if(getCourseByid){
    return getCourseByid
   }
}