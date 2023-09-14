"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockCourse = void 0;
const BlockCourse = (CourseRepository) => (_id) => {
    const blockedCourse = CourseRepository.BlockCourseByid(_id);
    if (blockedCourse) {
        return blockedCourse;
    }
};
exports.BlockCourse = BlockCourse;
