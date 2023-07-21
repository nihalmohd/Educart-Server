import { UserRepository } from "../../../infra/repository/userRepository";

export const Login=(UserRepository:UserRepository)=>async(Username:string,Password:string)=>{

const UserNameExist=await UserRepository.findByUsername(Username)
if(UserNameExist&&UserNameExist.Password===Password){
  console.log(UserNameExist,"Eisit")
return UserNameExist   
}
return null
}