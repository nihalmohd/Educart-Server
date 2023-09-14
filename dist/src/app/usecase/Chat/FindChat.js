"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindChats = void 0;
const FindChats = (chatRepository) => {
    const AddedChat = chatRepository.FindChat();
    return AddedChat;
};
exports.FindChats = FindChats;
