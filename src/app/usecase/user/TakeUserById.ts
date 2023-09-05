import { UserRepository } from "../../../infra/repository/userRepository"; 
export const  TakeUserById=(UserRepository:UserRepository)=>async(id?:string)=>{
    console.log(id,"usecase");
    
const userFounded=await UserRepository.findById(id)
console.log(userFounded,"usercase is ok");

return userFounded   
}