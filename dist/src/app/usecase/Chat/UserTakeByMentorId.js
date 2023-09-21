"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTakeByMentorId = void 0;
const UserTakeByMentorId = (chatRepository) => (MentorId) => {
    console.log(MentorId);
    const GorMentorsById = chatRepository.FindMentor(MentorId);
    if (GorMentorsById) {
        return GorMentorsById;
    }
};
exports.UserTakeByMentorId = UserTakeByMentorId;
