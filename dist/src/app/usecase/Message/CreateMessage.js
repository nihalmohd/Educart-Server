"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMessage = void 0;
const CreateMessage = (MessageRepository) => (UserId, ChatId, content) => {
    // console.log(UserId,ChatId,content,"is use case");
    const CreateMessage = MessageRepository.createMessageUser(UserId, ChatId, content);
    return CreateMessage;
};
exports.CreateMessage = CreateMessage;
