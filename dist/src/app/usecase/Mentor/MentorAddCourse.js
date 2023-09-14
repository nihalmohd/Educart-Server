"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MentorAddCourseWithClass = void 0;
const MentorAddCourseWithClass = (CourseRepository) => (courseTitle, courseDescription, courseLearning, courseIncludes, coursePrice, SelectedCategory, ThumbnailLocation, SelectedSubCategory, DemoVideoLocation, className, ClassDescription, classVideoLocation, Mentorname, MentorId) => {
    console.log(coursePrice, "indian rupees ", MentorId);
    const courseDetails = {
        courseTitle,
        Mentorname,
        MentorId,
        courseDescription,
        courseLearning,
        courseIncludes,
        coursePrice,
        ThumbnailLocation,
        SelectedCategory,
        SelectedSubCategory,
        DemoVideoLocation,
        Class: [{ classname: className, ClassDescription: ClassDescription, classVideoLocation: classVideoLocation }]
    };
    const CreatedCourse = CourseRepository.CreateCourse(courseDetails);
    console.log(CreatedCourse, "is getting or not i want to check");
    return CreatedCourse;
};
exports.MentorAddCourseWithClass = MentorAddCourseWithClass;
