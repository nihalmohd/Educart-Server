import { CourseRepository } from "../../../infra/repository/MentorCourse";


export const UnblockCourse =(CourseRepository:CourseRepository)=>(_id:string)=>{
   const UnblockedCourse =CourseRepository.UnblacockCourseByid(_id)
   if(UnblockedCourse){
    return UnblockedCourse
   }
}