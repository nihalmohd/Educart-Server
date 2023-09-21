import { MessageRepository } from "../../../infra/repository/MessageRepository";


export const FindingMessage = (MessageRepository:MessageRepository) =>(chatId:string)=>{
    // console.log(chatId,"is use case");
    
    const CreateMessage =  MessageRepository.FindByChatId(chatId)
    return CreateMessage
}