"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MentorAddCourse = void 0;
const CourseModel_1 = require("../../../infra/database/CourseModel");
const MentorCourse_1 = require("../../../infra/repository/MentorCourse");
const MentorAddCourse_1 = require("../../../app/usecase/Mentor/MentorAddCourse");
const CourseDb = CourseModel_1.Courses;
const CourseRepository = (0, MentorCourse_1.MentorCourseIMP)(CourseDb);
const MentorAddCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { courseTitle, courseDescription, courseLearning, courseIncludes, coursePrice, ThumbnailLocation, SelectedCategory, SelectedSubCategory, DemoVideoLocation, className, ClassDescription, classVideoLocation, Username } = req.body;
    console.log(coursePrice, SelectedCategory, SelectedSubCategory);
    const mentor = req.userInfo;
    const MentorId = mentor === null || mentor === void 0 ? void 0 : mentor.id;
    const Mentorname = Username;
    console.log(MentorId);
    try {
        console.log(courseTitle, courseDescription, courseLearning, courseIncludes, coursePrice, ThumbnailLocation, SelectedCategory, SelectedSubCategory, DemoVideoLocation, className, ClassDescription, classVideoLocation, Mentorname, "add couses 12323122343", MentorId);
        console.log(SelectedCategory, SelectedSubCategory, coursePrice, "is getting check i want to understand");
        const UploadeCourse = yield (0, MentorAddCourse_1.MentorAddCourseWithClass)(CourseRepository)(courseTitle, courseDescription, courseLearning, courseIncludes, coursePrice, SelectedCategory, ThumbnailLocation, SelectedSubCategory, DemoVideoLocation, className, ClassDescription, classVideoLocation, Mentorname, MentorId);
        if (UploadeCourse) {
            res.status(200).json({ message: "Course Uploaded Successfull", UploadeCourse });
        }
        else {
            res.status(401).json({ message: "Something went worong" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Internal server Error" });
    }
});
exports.MentorAddCourse = MentorAddCourse;
