import { UserRepository } from "../../../infra/repository/userRepository"; 
export const  TakeCourseByUserid=(UserRepository:UserRepository)=>async(id:string)=>{
    console.log(id,"usecase");
    
const FoundedCousebyUserid=await UserRepository.FindMycoursebyId(id)
console.log(FoundedCousebyUserid,"usercase is ok");

return FoundedCousebyUserid   
}