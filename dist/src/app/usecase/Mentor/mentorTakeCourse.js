"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeCourse = void 0;
const TakeCourse = (CourseRepository) => {
    const getCourse = CourseRepository.FindCourse();
    if (getCourse) {
        return getCourse;
    }
};
exports.TakeCourse = TakeCourse;
