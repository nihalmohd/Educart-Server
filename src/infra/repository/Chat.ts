import { Chat } from "../../domin/model/Chat/Chat";
import { MongoDBChat } from "../database/Chat";

export type chatRepository ={
 creatChat:(userId:string,MentorId:string)=>Promise<Chat[] >
 FindChat():Promise<Chat[]>
} 


export const ChatRepositoryIMP = (chatmodel:MongoDBChat):chatRepository =>{

    const creatChat = async(userId:string,MentorId:string):Promise<Chat[] >=>{
      const CreatedChat = await chatmodel.create(userId,MentorId)
        return CreatedChat 
      }
      const FindChat = async ():Promise<Chat[]>=>{
        const FoundChat = await chatmodel.find()
        return FoundChat
      }
      
return{
    creatChat,
    FindChat
}
}