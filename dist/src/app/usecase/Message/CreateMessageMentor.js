"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMessageMentor = void 0;
const CreateMessageMentor = (MessageRepository) => (MentorId, ChatId, content) => {
    // console.log(MentorId,ChatId,content,"is use case is correct");
    const CreateMessage = MessageRepository.createMessageMentor(MentorId, ChatId, content);
    return CreateMessage;
};
exports.CreateMessageMentor = CreateMessageMentor;
