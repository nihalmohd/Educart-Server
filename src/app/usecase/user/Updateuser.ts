import { UserRepository } from "../../../infra/repository/userRepository"; 
export const  UpdateuserProfile=(UserRepository:UserRepository)=>async(id:string,Username:string,Image:string)=>{
    console.log(id,"usecase");
    
const userFounded=await UserRepository.Updateuser(id,Username,Image)
console.log(userFounded,"usercase is ok");

return userFounded   
}