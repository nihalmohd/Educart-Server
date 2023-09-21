"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindingMessage = void 0;
const FindingMessage = (MessageRepository) => (chatId) => {
    // console.log(chatId,"is use case");
    const CreateMessage = MessageRepository.FindByChatId(chatId);
    return CreateMessage;
};
exports.FindingMessage = FindingMessage;
