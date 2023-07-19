import { User } from "../../../domin/model/User/User";
import { UserRepository } from "../../../infra/repository/userRepository";




export const Exist=(UserRepository:UserRepository)=>async(Email:string)=>{

const UserExisted=await UserRepository.findByEmail(Email)
console.log(UserExisted,"Eisit")
return UserExisted
}