import { MessageRepository } from "../../../infra/repository/MessageRepository";


export const CreateMessage = (MessageRepository:MessageRepository) =>(UserId:string,ChatId:string, content:string)=>{
    // console.log(UserId,ChatId,content,"is use case");
    
    const CreateMessage =  MessageRepository.createMessageUser(UserId,ChatId,content)
    return CreateMessage
}