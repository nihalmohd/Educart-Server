import { CourseRepository } from "../../../infra/repository/MentorCourse";


export const TakeCourse =(CourseRepository:CourseRepository)=>{
   const getCourse =CourseRepository.FindCourse()
   if(getCourse){
    return getCourse
   }
}