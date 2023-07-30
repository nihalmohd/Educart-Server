import { UserRepository } from "../../../infra/repository/userRepository"



export const BlockUser=(userRepository:UserRepository)=>async(id:string)=>{
    console.log("usecasil Yethiiiiii");
    
    const displayUserGot =await userRepository.UpdateUserStatusTrue(id)
    console.log(displayUserGot,"ith kittiyo");
    
    return displayUserGot
}

export const UnBlockUser=(userRepository:UserRepository)=>async(id:string)=>{
    const displayUnblockedUserGot =await userRepository.UpdateUserStatusFalse(id)
    return displayUnblockedUserGot
}