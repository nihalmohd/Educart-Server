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
exports.AddClasses = void 0;
const CourseModel_1 = require("../../../infra/database/CourseModel");
const MentorCourse_1 = require("../../../infra/repository/MentorCourse");
const MentorAddClassesById_1 = require("../../../app/usecase/Mentor/MentorAddClassesById");
const CourseDb = CourseModel_1.Courses;
const CourseRepository = (0, MentorCourse_1.MentorCourseIMP)(CourseDb);
const AddClasses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body, "req.body");
    const { _id } = req.body;
    const { Classdatas } = req.body;
    // const {_id ,Classname,ClassDescription,ClassVideoLocation} =Classdatas
    try {
        const ClassAddedCourse = yield (0, MentorAddClassesById_1.MentorAddClassesById)(CourseRepository)(_id, Classdatas);
        if (ClassAddedCourse) {
            res.status(200).json({ message: "Class Added Successfull", ClassAddedCourse });
        }
        else {
            res.status(401).json({ message: "something went wrong" });
        }
    }
    catch (error) {
        res.status(501).json({ message: "internal server error" });
    }
});
exports.AddClasses = AddClasses;
