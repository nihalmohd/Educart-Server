import { Chat } from "../../../domin/model/Chat/Chat";
import { chatRepository } from "../../../infra/repository/Chat"

export const AddChats =(chatRepository:chatRepository)=>(UserId:string,MentorId:string)=>{
    console.log(UserId,MentorId,"usecase is ok");

   const AddedChat =chatRepository.createChat(UserId,MentorId)
   if(AddedChat){
    return AddedChat
   }
}

