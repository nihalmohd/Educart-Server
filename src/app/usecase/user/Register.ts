import { User } from "../../../domin/model/User/User";
import { UserRepository } from "../../../infra/repository/userRepository";


export const Register=(UserRepository:UserRepository)=>async (Username:string,Email:string,Password:string)=>{
    const newUser:User={
    Username,
     Email,
     Password
    }
    const createdUser=await UserRepository.create(newUser);
    return createdUser
}


