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
exports.FindByChatedId = void 0;
const Message_1 = require("../../../infra/database/Message");
const MessageRepository_1 = require("../../../infra/repository/MessageRepository");
const FindChatId_1 = require("../../../app/usecase/Message/FindChatId");
const Messagedb = Message_1.messageModel;
const MessageRepository = (0, MessageRepository_1.MessageRepositoryIMP)(Messagedb);
const FindByChatedId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.query.chatId);
        const chatId = req.query.chatId;
        //   console.log(chatId,"chatt id");
        const FoundedMessages = yield (0, FindChatId_1.FindingMessage)(MessageRepository)(chatId);
        if (FoundedMessages) {
            res.status(200).json({ message: "Founded successfully ", FoundedMessages });
        }
        else {
            res.status(401).json({ message: "something went wrong" });
        }
    }
    catch (error) {
        res.status(501).json({ message: "Internal Server Error" });
    }
});
exports.FindByChatedId = FindByChatedId;
