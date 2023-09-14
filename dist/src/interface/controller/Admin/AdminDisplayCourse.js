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
exports.AdminDisplayCourse = void 0;
const mentorTakeCourse_1 = require("../../../app/usecase/Mentor/mentorTakeCourse");
const CourseModel_1 = require("../../../infra/database/CourseModel");
const MentorCourse_1 = require("../../../infra/repository/MentorCourse");
const CourseDb = CourseModel_1.Courses;
const CourseRepository = (0, MentorCourse_1.MentorCourseIMP)(CourseDb);
const AdminDisplayCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Getcourse = yield (0, mentorTakeCourse_1.TakeCourse)(CourseRepository);
        if (Getcourse) {
            res.status(200).json({ message: "Counses Founded Successfull", Getcourse });
        }
        else {
            res.status(401).json({ message: "something went wrong" });
        }
    }
    catch (error) {
        res.status(501).json({ message: "Internal Server Error" });
    }
});
exports.AdminDisplayCourse = AdminDisplayCourse;
