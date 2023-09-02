import { CourseRepository } from "../../../infra/repository/MentorCourse";


export const TakeCourseByCategoryBased =(CourseRepository:CourseRepository)=>(Category:string)=>{
   const getCourseByid =CourseRepository.CourseBycateogry(Category)
   if(getCourseByid){
    return getCourseByid
   }
}