import { Chat } from "../../domin/model/Chat/Chat";
import { MongoDBChat } from "../database/Chat";
import { ObjectId,} from "mongodb";

export type chatRepository ={
 creatChat:(Userid:string,MentorId:string)=>Promise<Chat >
 FindChat():Promise<Chat[]>
 FindUser:(UserId:string)=>Promise<Chat[]>
 FindMentor:(MentorId:string)=>Promise<Chat[]>
} 


export const ChatRepositoryIMP = (chatmodel:MongoDBChat):chatRepository =>{

    const creatChat = async(UserId:string,MentorId:string):Promise<Chat >=>{
        console.log(UserId,MentorId,"is ok");
      const CreatedChat = await chatmodel.create({UserId:new ObjectId(UserId),MentorId:new ObjectId(MentorId)})
        return CreatedChat 
      }
      const FindChat = async ():Promise<Chat[]>=>{
        const FoundChat = await chatmodel.find()
        return FoundChat
      }
    const FindMentor =async (MentorId:string) =>{
        const FoundedUserByMentorid = await chatmodel.find({UserId:new ObjectId(MentorId)})
        return FoundedUserByMentorid
    }
    const FindUser =  async (UserId:string):Promise<Chat[]> =>{
        const FoundedUserByUserid = await chatmodel.find({UserId:new ObjectId(UserId)})
        return FoundedUserByUserid
    }
return{
    creatChat,
    FindChat,
    FindUser,
    FindMentor
}
}