
import { chatRepository } from "../../../infra/repository/Chat"

export const FindChatsByIds =(chatRepository:chatRepository)=>(UserId:string,MentorId:string)=>{
   const FoundedChats =chatRepository.FindByIds(UserId,MentorId)
    return FoundedChats
}

