import { User } from "../../../domin/model/User/User";
import { UserRepository } from "../../../infra/repository/userRepository";

export const Login=(UserRepository:UserRepository)=>async(Username:string)=>{

const UserNameExist=await UserRepository.findByUsername(Username)
console.log(UserNameExist,"Eisit")
return UserNameExist
}