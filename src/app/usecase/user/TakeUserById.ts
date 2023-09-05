import { UserRepository } from "../../../infra/repository/userRepository"; 
export const  TakeUserById=(UserRepository:UserRepository)=>async(id?:string)=>{
const userFounded=await UserRepository.findById(id)
return userFounded   
}