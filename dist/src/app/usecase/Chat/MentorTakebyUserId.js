"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MentorTakeByUserId = void 0;
const MentorTakeByUserId = (chatRepository) => (UserId) => {
    console.log(UserId);
    const GorMentorsById = chatRepository.FindUser(UserId);
    if (GorMentorsById) {
        return GorMentorsById;
    }
};
exports.MentorTakeByUserId = MentorTakeByUserId;
