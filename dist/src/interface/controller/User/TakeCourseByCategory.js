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
exports.TakeCourseByCategory = void 0;
const CourseModel_1 = require("../../../infra/database/CourseModel");
const MentorCourse_1 = require("../../../infra/repository/MentorCourse");
const CorseByCategory_1 = require("../../../app/usecase/user/CorseByCategory");
const CourseDb = CourseModel_1.Courses;
const CourseRepository = (0, MentorCourse_1.MentorCourseIMP)(CourseDb);
const TakeCourseByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("nihall");
    try {
        const Category = req.query.Category;
        console.log(Category);
        const FoundedCourseByCategory = yield (0, CorseByCategory_1.TakeCourseByCategoryBased)(CourseRepository)(Category);
        if (FoundedCourseByCategory) {
            res.status(200).json({ message: "Course got by id is successfull", FoundedCourseByCategory });
        }
        else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
    catch (error) {
        res.status(501).json({ message: "Internal server Error" });
    }
});
exports.TakeCourseByCategory = TakeCourseByCategory;
