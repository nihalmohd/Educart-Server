import { CourseRepository } from "../../../infra/repository/MentorCourse";


export const TakeCourseByNameBased =(CourseRepository:CourseRepository)=>(Mentorname:string)=>{
   const getCourseByid =CourseRepository.MentorTakeCourseByName(Mentorname)
   if(getCourseByid){
    return getCourseByid
   }
}