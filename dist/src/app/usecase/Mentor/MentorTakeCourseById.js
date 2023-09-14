"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeCourseByid = void 0;
const TakeCourseByid = (CourseRepository) => (_id) => {
    const getCourseByid = CourseRepository.FindCourseById(_id);
    if (getCourseByid) {
        return getCourseByid;
    }
};
exports.TakeCourseByid = TakeCourseByid;
