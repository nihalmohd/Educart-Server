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
exports.AdminUnblaockCourse = exports.AdminBlaockCourse = void 0;
const CourseModel_1 = require("../../../infra/database/CourseModel");
const MentorCourse_1 = require("../../../infra/repository/MentorCourse");
const AdminBlockCourse_1 = require("../../../app/usecase/admin/AdminBlockCourse");
const AdminUnblockCourse_1 = require("../../../app/usecase/admin/AdminUnblockCourse");
const CourseDb = CourseModel_1.Courses;
const CourseRepository = (0, MentorCourse_1.MentorCourseIMP)(CourseDb);
const AdminBlaockCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.body;
    try {
        const BlockedkCourse = yield (0, AdminBlockCourse_1.BlockCourse)(CourseRepository)(_id);
        if (BlockedkCourse) {
            console.log(BlockedkCourse);
            res.status(200).json({ message: "courseBlocked Successfull", BlockedkCourse });
        }
        else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
    catch (error) {
        res.status(501).json({ message: "Internal Server Error" });
    }
});
exports.AdminBlaockCourse = AdminBlaockCourse;
const AdminUnblaockCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.body;
    try {
        const UnblockedkCourse = yield (0, AdminUnblockCourse_1.UnblockCourse)(CourseRepository)(_id);
        if (UnblockedkCourse) {
            res.status(200).json({ message: "course Unblocked Successfull", UnblockedkCourse });
        }
        else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
    catch (error) {
        res.status(501).json({ message: "Internal Server Error" });
    }
});
exports.AdminUnblaockCourse = AdminUnblaockCourse;
