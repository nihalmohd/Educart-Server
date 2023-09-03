import { create } from "domain";
import { User } from "../../domin/model/User/User"
import { MongoDBUser,Userscheam } from "../database/userModel"
import {UpdateResult} from "../../domin/model/User/Update"
import { ObjectId } from "mongodb";




export type UserRepository={
    create : (User : User)=> Promise<User>; 
    findByEmail:(Email:string) =>  Promise<User|null>;
    findByUsername:(Username:string) =>Promise<User|null>
    FindUsers():Promise<User[]>;
    UpdateUserStatusTrue: (_id: string) =>Promise<User|void|UpdateResult>;
    UpdateUserStatusFalse:(_id: string) =>Promise<User|void|UpdateResult>
}

export const UserRepositoryIMP=(Usermodel:MongoDBUser):UserRepository=>{
const create=async (User:User):Promise<User>=>{
    const createdUser=await Usermodel.create(User)
    console.log("usercreated",createdUser)
    return createdUser.toObject()
}

const findByEmail=async(UserEmail:string):Promise<User | null>=>{
    console.log(UserEmail,"userEmail");
    const UserExist=await Usermodel.findOne({Email:UserEmail})
    console.log(UserExist?.toObject());
   return UserExist?UserExist.toObject():null
}
const findByUsername=async (Username:string):Promise<User | null >=>{
     console.log(Username)
     const UserNameExist=await Usermodel.findOne({Username:Username})
     return UserNameExist?UserNameExist.toObject():null
}

const FindUsers=async():Promise<User[]>=>{
   const FetchedUsers=await Usermodel.find()
   return FetchedUsers
//    .map((FetchedUsers)=>FetchedUsers.toObject())
}
// const findById= async (_id: any):Promise<User | null >=>{
//        const FindUserById=await Usermodel.findOne({_id:_id})
//     return FindUserById
// }
const UpdateUserStatusTrue=async (id: string):Promise<User|void|UpdateResult>=>{
    console.log("kitii kitiiii");    
  const UpdateUsers=await Usermodel.updateOne({_id: new ObjectId(id) },{$set:{Status:false}}) 
  if(UpdateUsers.matchedCount>0){
    console.log("User Block is Ok");
    return UpdateUsers
  }
}
  const UpdateUserStatusFalse=async (id: string):Promise<User|void|UpdateResult>=>{
    console.log("kitii kitiiii");    
  const UpdateUserstrue=await Usermodel.updateOne({_id: new ObjectId(id) },{$set:{Status:true}}) 
  if(UpdateUserstrue.matchedCount>0){
    console.log("User UnBlock is Ok");
    return UpdateUserstrue
    
  }
}

return {
    create,
    findByEmail,
    findByUsername,
    FindUsers,
    UpdateUserStatusTrue,
    UpdateUserStatusFalse
}
}

