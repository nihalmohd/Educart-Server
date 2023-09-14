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
exports.MentorTakeCourseByName = void 0;
const CourseModel_1 = require("../../../infra/database/CourseModel");
const MentorCourse_1 = require("../../../infra/repository/MentorCourse");
const MentorTakeCourseByName_1 = require("../../../app/usecase/Mentor/MentorTakeCourseByName");
const CourseDb = CourseModel_1.Courses;
const CourseRepository = (0, MentorCourse_1.MentorCourseIMP)(CourseDb);
const MentorTakeCourseByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("nihall");
    try {
        const Mentorname = req.query.Mentorname;
        console.log(Mentorname);
        const FoundedCourseByName = yield (0, MentorTakeCourseByName_1.TakeCourseByNameBased)(CourseRepository)(Mentorname);
        if (FoundedCourseByName) {
            res.status(200).json({ message: "Course got by id is successfull", FoundedCourseByName });
        }
        else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
    catch (error) {
        res.status(501).json({ message: "Internal server Error" });
    }
});
exports.MentorTakeCourseByName = MentorTakeCourseByName;
