import { Request, Response } from "express";
import { messageModel } from "../../../infra/database/Message"
import { MessageRepository, MessageRepositoryIMP } from "../../../infra/repository/MessageRepository"
import { CreateMessage } from "../../../app/usecase/Message/CreateMessage";
import { CreateMessageMentor } from "../../../app/usecase/Message/CreateMessageMentor";




const Messagedb = messageModel
const MessageRepository = MessageRepositoryIMP(Messagedb)

interface CustomRequest extends Request {
    userInfo?: { id: string; role: string };
  }

export const StartMessage =async(req:Request,res:Response)=>{
    try {
     const{currentId,chatId,content,Role} = req.body
     console.log(Role);

     if(Role==="User"){
        const UserId = currentId
         const createdMessageFounded = await CreateMessage(MessageRepository)(UserId,chatId,content)
         if(createdMessageFounded){
            res.status(200).json({message:"Founded Successfull",createdMessageFounded})
         }else{
            res.status(401).json({message:"something went wrong"})
         }  
     }else{
        const MentorId = currentId
      //   console.log(MentorId,chatId,content,"controller");
        const createdMessageFounded = await CreateMessageMentor(MessageRepository)(MentorId,chatId,content)
        
        if(createdMessageFounded){
           res.status(200).json({message:"Founded Successfull",createdMessageFounded})
        }else{
           res.status(401).json({message:"something went wrong"})
        }  
     }
    } catch (error) {
        res.status(500).json({message:"Internal server Error"})
    }

}




