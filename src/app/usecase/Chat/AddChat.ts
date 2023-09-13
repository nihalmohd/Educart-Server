
import { chatRepository } from "../../../infra/repository/Chat"

export const AddChats =(chatRepository:chatRepository)=>(UserId:string,MentorId:string)=>{
   const AddedChat =chatRepository.creatChat(UserId,MentorId)
   if(AddedChat){
    return AddedChat
   }
}

