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
exports.StartMessage = void 0;
const Message_1 = require("../../../infra/database/Message");
const MessageRepository_1 = require("../../../infra/repository/MessageRepository");
const CreateMessage_1 = require("../../../app/usecase/Message/CreateMessage");
const CreateMessageMentor_1 = require("../../../app/usecase/Message/CreateMessageMentor");
const Messagedb = Message_1.messageModel;
const MessageRepository = (0, MessageRepository_1.MessageRepositoryIMP)(Messagedb);
const StartMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { currentId, chatId, content, Role } = req.body;
        console.log(Role);
        if (Role === "User") {
            const UserId = currentId;
            const createdMessageFounded = yield (0, CreateMessage_1.CreateMessage)(MessageRepository)(UserId, chatId, content);
            if (createdMessageFounded) {
                res.status(200).json({ message: "Founded Successfull", createdMessageFounded });
            }
            else {
                res.status(401).json({ message: "something went wrong" });
            }
        }
        else {
            const MentorId = currentId;
            //   console.log(MentorId,chatId,content,"controller");
            const createdMessageFounded = yield (0, CreateMessageMentor_1.CreateMessageMentor)(MessageRepository)(MentorId, chatId, content);
            if (createdMessageFounded) {
                res.status(200).json({ message: "Founded Successfull", createdMessageFounded });
            }
            else {
                res.status(401).json({ message: "something went wrong" });
            }
        }
    }
    catch (error) {
        res.status(500).json({ message: "Internal server Error" });
    }
});
exports.StartMessage = StartMessage;
