import { Request, Response } from "express";
import { messageModel } from "../../../infra/database/Message"
import { MessageRepositoryIMP } from "../../../infra/repository/MessageRepository"
import { FindingMessage } from "../../../app/usecase/Message/FindChatId";


const Messagedb = messageModel
const MessageRepository = MessageRepositoryIMP(Messagedb)


export const FindByChatedId =async (req:Request,res:Response)=>{
    try {
        console.log(req.query.chatId);
        
      const chatId = req.query.chatId as string 
    //   console.log(chatId,"chatt id");
      
      const FoundedMessages = await FindingMessage(MessageRepository)(chatId)
      if(FoundedMessages){
        res.status(200).json({message:"Founded successfully ",FoundedMessages})
      }else{
        res.status(401).json({message:"something went wrong"})
      }
    } catch (error) {
       res.status(501).json({message:"Internal Server Error"}) 
    }
}