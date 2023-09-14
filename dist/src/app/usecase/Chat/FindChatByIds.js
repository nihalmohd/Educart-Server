"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindChatsByIds = void 0;
const FindChatsByIds = (chatRepository) => (UserId, MentorId) => {
    const FoundedChats = chatRepository.FindByIds(UserId, MentorId);
    return FoundedChats;
};
exports.FindChatsByIds = FindChatsByIds;
