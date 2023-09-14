"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnblockCourse = void 0;
const UnblockCourse = (CourseRepository) => (_id) => {
    const UnblockedCourse = CourseRepository.UnblacockCourseByid(_id);
    if (UnblockedCourse) {
        return UnblockedCourse;
    }
};
exports.UnblockCourse = UnblockCourse;
