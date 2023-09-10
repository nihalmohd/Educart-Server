import { UserRepository } from "../../../infra/repository/userRepository"; 
export const  UpdatedCourseId=(UserRepository:UserRepository)=>async(_id:string,CourseId:string)=>{
    console.log(_id,CourseId,"usecase");
    
const FoundedCourseid=await UserRepository.FindCourseId(_id,CourseId)
console.log(FoundedCourseid,"usercase is ok");

return FoundedCourseid;
}