"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeCourseByCategoryBased = void 0;
const TakeCourseByCategoryBased = (CourseRepository) => (Category) => {
    const getCourseByid = CourseRepository.CourseBycateogry(Category);
    if (getCourseByid) {
        return getCourseByid;
    }
};
exports.TakeCourseByCategoryBased = TakeCourseByCategoryBased;
