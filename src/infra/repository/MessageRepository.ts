import { ObjectId } from "mongodb"
import { Chat, message } from "../../domin/model/Chat/Chat"
import { MongoDBMessage } from "../database/Message"




export type MessageRepository = {
    createMessageUser: (UserId: string, ChatId: string, content: string) => Promise<message>
    createMessageMentor: (MenrorId: string, content: string, ChatId: string) => Promise<message>,
    FindByChatId(chatId:string):Promise<message[]>
}


export const MessageRepositoryIMP = (MessageModel: MongoDBMessage): MessageRepository => {
    const createMessageUser = async (UserId: string, ChatId: string, content: string): Promise<message> => {
        console.log(UserId, ChatId, content, "repository");
        const Message = {
            User: new ObjectId(UserId),
            content: content,
            chat: new ObjectId(ChatId)
        }

       let CreatedMessageUser = await MessageModel.create(Message)
          console.log(CreatedMessageUser);
    //    CreatedMessageUser = await CreatedMessageUser.populate("User","_id Username ProfileImage Email")
    //    CreatedMessageUser = await CreatedMessageUser.populate("Mentor","_id Username ProfileImage Email")
    //    CreatedMessageUser = await CreatedMessageUser.populate("chat")
    //    CreatedMessageUser = await CreatedMessageUser.populate("chat.User")
    //    CreatedMessageUser = await CreatedMessageUser.populate("chat.Mentor")
    //     console.log(CreatedMessageUser,"loging created USer");
        
        return CreatedMessageUser
    }

    
    const createMessageMentor = async (MenrorId: string, ChatId: string, content: string): Promise<message> => {
        console.log(MenrorId,ChatId,content,"nothing");
        
        const Message = {
            Mentor: new ObjectId(MenrorId),
            content: content,
            chat: new ObjectId(ChatId)
        }
        
        let CreatedMessageMentor = await MessageModel.create(Message)
        // console.log("lkjsdlkjsdfjslkdjf",CreatedMessageMentor);   
        // CreatedMessageMentor = await CreatedMessageMentor.populate("User","_id Username ProfileImage Email")
        // CreatedMessageMentor = await CreatedMessageMentor.populate("Mentor","_id Username ProfileImage Email")
        // CreatedMessageMentor = await CreatedMessageMentor.populate("chat")
        // CreatedMessageMentor = await CreatedMessageMentor.populate("chat.User")
        // CreatedMessageMentor = await CreatedMessageMentor.populate("chat.Mentor")
        // console.log(CreatedMessageMentor,"loging Crated Mentor");
        
        return CreatedMessageMentor

    }
    
    const FindByChatId = async (chatId: string): Promise<message[]> => {
        const FoundedMessages = await MessageModel.find({ chat: chatId }).populate("User").populate("Mentor").populate("chat")
        return FoundedMessages
    }  


    return {
        createMessageUser,
        createMessageMentor,
        FindByChatId
    }
}  