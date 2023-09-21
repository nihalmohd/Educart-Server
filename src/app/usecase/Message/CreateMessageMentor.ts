import { MessageRepository } from "../../../infra/repository/MessageRepository";


export const CreateMessageMentor = (MessageRepository:MessageRepository) =>(MentorId:string,ChatId:string,content:string)=>{
    // console.log(MentorId,ChatId,content,"is use case is correct");
    
    const CreateMessage =  MessageRepository.createMessageMentor(MentorId,ChatId,content)
    return CreateMessage
}