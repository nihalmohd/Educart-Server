import { UserRepository } from "../../../infra/repository/userRepository"; 
export const  UpdatedUserCourseArray=(UserRepository:UserRepository)=>async(_id:string,CourseId:string)=>{
    console.log(_id,"usecase");
    
const userFounded=await UserRepository.UserCoruseAraryUpdate(_id,CourseId)
console.log(userFounded,"usercase is ok");

return userFounded   
}