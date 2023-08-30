import { CourseRepository } from "../../../infra/repository/MentorCourse";


export const BlockCourse =(CourseRepository:CourseRepository)=>(_id:string)=>{
   const blockedCourse =CourseRepository.BlockCourseByid(_id)
   if(blockedCourse){
    return blockedCourse
   }
}