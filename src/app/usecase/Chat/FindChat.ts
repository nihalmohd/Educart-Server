
import { chatRepository } from "../../../infra/repository/Chat"

export const FindChats =(chatRepository:chatRepository)=>{
   const AddedChat =chatRepository.FindChat()
    return AddedChat
}

