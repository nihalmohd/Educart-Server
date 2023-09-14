"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MentorAddClassesById = void 0;
const MentorAddClassesById = (CourseRepository) => (_id, Classdatas) => {
    const getCourseByid = CourseRepository.MentorAddClasses(_id, Classdatas);
    if (getCourseByid) {
        return getCourseByid;
    }
};
exports.MentorAddClassesById = MentorAddClassesById;
