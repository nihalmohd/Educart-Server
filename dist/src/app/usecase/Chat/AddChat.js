"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddChats = void 0;
const AddChats = (chatRepository) => (UserId, MentorId) => {
    console.log(UserId, MentorId, "usecase is ok");
    const AddedChat = chatRepository.createChat(UserId, MentorId);
    if (AddedChat) {
        return AddedChat;
    }
};
exports.AddChats = AddChats;
