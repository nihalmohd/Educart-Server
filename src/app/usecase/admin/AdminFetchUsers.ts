import { UserRepository } from "../../../infra/repository/userRepository"



export const displayUsers=(userRepository:UserRepository)=>{
    const displayUserGot=userRepository.FindUsers()
    return displayUserGot
}