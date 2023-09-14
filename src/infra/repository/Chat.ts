import mongoose from "mongoose";
import { Chat } from "../../domin/model/Chat/Chat";
import { MongoDBChat } from "../database/Chat";
import { ObjectId,} from "mongodb";

export type chatRepository ={
//  creatChat:(Userid:string,MentorId:string)=>Promise<Chat >
 FindChat():Promise<Chat[]>
 FindUser:(UserId:string)=>Promise<Chat[]>
 FindMentor:(MentorId:string)=>Promise<Chat[]>
 FindByIds:(UserId:string,MentorId:string)=>Promise<Chat[]>
 createChat:(UserId:string,MentorId:string)=>Promise<Chat[] |null >
} 


export const ChatRepositoryIMP = (chatmodel:MongoDBChat):chatRepository =>{

    // const creatChat = async(UserId:string,MentorId:string):Promise<Chat >=>{
    //     console.log(UserId,MentorId,"is ok");
    //   const CreatedChat = await chatmodel.create({UserId:new ObjectId(UserId),MentorId:new ObjectId(MentorId)})
    //     return CreatedChat 
    //   }
      const FindChat = async ():Promise<Chat[]>=>{
        const FoundChat = await chatmodel.find()
        return FoundChat
      }
    const FindMentor =async (MentorId:string) =>{
        const FoundedUserByMentorid = await chatmodel.find({UserId:new ObjectId(MentorId)})
        return FoundedUserByMentorid
    }
    const FindByIds= async(userId: string,MentorId: string):Promise<Chat[]>=>{
      const FoundedChats = await chatmodel .find({ $and: [{ userId: userId }, { MentorId: MentorId }] })
      console.log(FoundedChats,"halloow this is shown form backded repository");
      
     return FoundedChats
    }
    const FindUser =  async (UserId:string):Promise<Chat[]> =>{
        const FoundedUserByUserid = await chatmodel.find({UserId:new ObjectId(UserId)}).populate("MentorId")
        return FoundedUserByUserid
    }
    const createChat = async (UserId: string, MentorId: string): Promise<Chat[] | null> => {
          const User = new mongoose.Types.ObjectId(UserId);
        const Mentor = new mongoose.Types.ObjectId(MentorId);
        const isChat = await chatmodel.find({ $and: [{ UserId: UserId }, { MentorId: MentorId }]})
        if (isChat.length > 0) {
          return isChat;
        } else {
          const chatData: Chat = {
             User,
            Mentor,
          };
  
          const createdChat = await chatmodel.create(chatData);
          const fullChat = await chatmodel
            .find({ _id: createdChat._id })
            console.log(fullChat);
            
          return fullChat;
        }
    };
    
return{
    
    FindChat,
    FindUser,
    FindMentor,
    FindByIds,
    createChat,
}
}