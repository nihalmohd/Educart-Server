import { create } from "domain";
import { User } from "../../domin/model/User/User"
import { MongoDBUser,Userscheam } from "../database/userModel"
import { promises } from "dns";


export type UserRepository={
    create : (User : User)=> Promise<User>; 
    findByEmail:(Email:string) =>  Promise<User|null>;
}

export const UserRepositoryIMP=(Usermodel:MongoDBUser):UserRepository=>{
const create=async (User:User)=>{
    const createdUser=await Usermodel.create(User)
    console.log("usercreated",createdUser)
    return createdUser.toObject()
}

const findByEmail=async(userEmail:string):Promise<User | null>=>{
    const UserExist=await Usermodel.findOne({userEmail})
   return UserExist?UserExist.toObject():null
}

return {
    create,
    findByEmail
}
}

