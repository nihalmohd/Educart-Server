import { create } from "domain";
import { User } from "../../domin/model/User/User"
import { MongoDBUser, Userscheam } from "../database/userModel"
import { UpdateResult } from "../../domin/model/User/Update"
import { ObjectId } from "mongodb";
import { Course } from "../../domin/model/Mentor/CourseModel";




export type UserRepository = {
  create: (User: User) => Promise<User>;
  findByEmail: (Email: string) => Promise<User | null>;
  findByUsername: (Username: string) => Promise<User | null>
  FindUsers(): Promise<User[]>;
  UpdateUserStatusTrue: (_id: string) => Promise<User | void | UpdateResult>;
  UpdateUserStatusFalse: (_id: string) => Promise<User | void | UpdateResult>
  findById: (id?: string) => Promise<User | null>;
  Updateuser: (id: string, Username: string, Image: string) => Promise<User | void | UpdateResult>;
  UserCoruseAraryUpdate: (_id:string,CourseId:string)=> Promise<User | void | UpdateResult>
  FindCourseId:(_id:string,CourseId:string) =>Promise<User | null>
  FindMycoursebyId: (_id:string)=>Promise <User| null>
 }

export const UserRepositoryIMP = (Usermodel: MongoDBUser): UserRepository => {
  const create = async (User: User): Promise<User> => {
    const createdUser = await Usermodel.create(User)
    console.log("usercreated", createdUser)
    return createdUser.toObject()
  }

  const findByEmail = async (UserEmail: string): Promise<User | null> => {
    console.log(UserEmail, "userEmail");
    const UserExist = await Usermodel.findOne({ Email: UserEmail })
    console.log(UserExist?.toObject());
    return UserExist ? UserExist.toObject() : null
  }
  const findByUsername = async (Username: string): Promise<User | null> => {
    console.log(Username)
    const UserNameExist = await Usermodel.findOne({ Username: Username })
    return UserNameExist ? UserNameExist.toObject() : null
  }

  const FindUsers = async (): Promise<User[]> => {
    const FetchedUsers = await Usermodel.find()
    return FetchedUsers
    //    .map((FetchedUsers)=>FetchedUsers.toObject())
  }
  // const findById= async (_id: any):Promise<User | null >=>{
  //        const FindUserById=await Usermodel.findOne({_id:_id})
  //     return FindUserById
  // }
  const UpdateUserStatusTrue = async (id: string): Promise<User | void | UpdateResult> => {
    console.log("kitii kitiiii");
    const UpdateUsers = await Usermodel.updateOne({ _id: new ObjectId(id) }, { $set: { Status: false } })
    if (UpdateUsers.matchedCount > 0) {
      console.log("User Block is Ok");
      return UpdateUsers
    }
  }
  const UpdateUserStatusFalse = async (id: string): Promise<User | void | UpdateResult> => {
    console.log("kitii kitiiii");
    const UpdateUserstrue = await Usermodel.updateOne({ _id: new ObjectId(id) }, { $set: { Status: true } })
    if (UpdateUserstrue.matchedCount > 0) {
      console.log("User UnBlock is Ok");
      return UpdateUserstrue
    }
  }
  const findById = async (id?: string): Promise<User | null> => {
    console.log(id, "user_id");
    const UserGotid = await Usermodel.findOne({ _id: id })
    console.log(UserGotid?.toObject());
    return UserGotid ? UserGotid.toObject() : null
  }

  const Updateuser = async (id: string, Username: string, Image: string): Promise<User | void | UpdateResult> => {
    const Updateduser = await Usermodel.updateOne({ _id: id }, { $set: { Username: Username, ProfileImage: Image } })
    if (Updateduser.matchedCount > 0) {
      console.log("User UnBlock is Ok");
      return Updateduser
    }
  }
  const UserCoruseAraryUpdate = async (_id: string, CourseId: string): Promise<User | void | UpdateResult> => {
    console.log(_id,"ready",CourseId,"ready");
    const UpdateUserCourseArray = await Usermodel.updateOne({ _id:new ObjectId( _id) }, { $push: { courses:CourseId } })
    return UpdateUserCourseArray
  }

  const FindCourseId = async (_id: string, CourseId: string): Promise<User | null> => {
    const FoundedCourseIdDoc = await Usermodel.findOne({
      _id: _id,
      'courses': new ObjectId(CourseId)
    });
  
    console.log(FoundedCourseIdDoc);
  
    return FoundedCourseIdDoc;
  }
  
  const FindMycoursebyId =async (_id:string):Promise <User| null>=>{
    console.log(_id,"nihallll");
     const FondedCourse = await Usermodel.findById(new ObjectId(_id)).populate("courses")
     return FondedCourse
  }

  return {
    create,
    findByEmail,
    findByUsername,
    FindUsers,
    UpdateUserStatusTrue,
    UpdateUserStatusFalse,
    findById,
    Updateuser,
    UserCoruseAraryUpdate,
    FindCourseId,
    FindMycoursebyId
  }
}

