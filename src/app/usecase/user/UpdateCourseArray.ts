import { UserRepository } from "../../../infra/repository/userRepository"; 
export const  UpdatedUserCourseArray=(UserRepository:UserRepository)=>async(id:string,CourseId:string)=>{
    console.log(id,"usecase");
    
const userFounded=await UserRepository.UserCoruseAraryUpdate(id,CourseId)
console.log(userFounded,"usercase is ok");

return userFounded   
}