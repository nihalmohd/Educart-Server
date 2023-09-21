"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRepositoryIMP = void 0;
const mongodb_1 = require("mongodb");
const MessageRepositoryIMP = (MessageModel) => {
    const createMessageUser = (UserId, ChatId, content) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(UserId, ChatId, content, "repository");
        const Message = {
            User: new mongodb_1.ObjectId(UserId),
            content: content,
            chat: new mongodb_1.ObjectId(ChatId)
        };
        let CreatedMessageUser = yield MessageModel.create(Message);
        console.log(CreatedMessageUser);
        //    CreatedMessageUser = await CreatedMessageUser.populate("User","_id Username ProfileImage Email")
        //    CreatedMessageUser = await CreatedMessageUser.populate("Mentor","_id Username ProfileImage Email")
        //    CreatedMessageUser = await CreatedMessageUser.populate("chat")
        //    CreatedMessageUser = await CreatedMessageUser.populate("chat.User")
        //    CreatedMessageUser = await CreatedMessageUser.populate("chat.Mentor")
        //     console.log(CreatedMessageUser,"loging created USer");
        return CreatedMessageUser;
    });
    const createMessageMentor = (MenrorId, ChatId, content) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(MenrorId, ChatId, content, "nothing");
        const Message = {
            Mentor: new mongodb_1.ObjectId(MenrorId),
            content: content,
            chat: new mongodb_1.ObjectId(ChatId)
        };
        let CreatedMessageMentor = yield MessageModel.create(Message);
        // console.log("lkjsdlkjsdfjslkdjf",CreatedMessageMentor);   
        // CreatedMessageMentor = await CreatedMessageMentor.populate("User","_id Username ProfileImage Email")
        // CreatedMessageMentor = await CreatedMessageMentor.populate("Mentor","_id Username ProfileImage Email")
        // CreatedMessageMentor = await CreatedMessageMentor.populate("chat")
        // CreatedMessageMentor = await CreatedMessageMentor.populate("chat.User")
        // CreatedMessageMentor = await CreatedMessageMentor.populate("chat.Mentor")
        // console.log(CreatedMessageMentor,"loging Crated Mentor");
        return CreatedMessageMentor;
    });
    const FindByChatId = (chatId) => __awaiter(void 0, void 0, void 0, function* () {
        const FoundedMessages = yield MessageModel.find({ chat: chatId }).populate("User").populate("Mentor").populate("chat");
        return FoundedMessages;
    });
    return {
        createMessageUser,
        createMessageMentor,
        FindByChatId
    };
};
exports.MessageRepositoryIMP = MessageRepositoryIMP;
