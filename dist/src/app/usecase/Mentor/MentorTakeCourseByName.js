"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeCourseByNameBased = void 0;
const TakeCourseByNameBased = (CourseRepository) => (Mentorname) => {
    const getCourseByid = CourseRepository.MentorTakeCourseByName(Mentorname);
    if (getCourseByid) {
        return getCourseByid;
    }
};
exports.TakeCourseByNameBased = TakeCourseByNameBased;
