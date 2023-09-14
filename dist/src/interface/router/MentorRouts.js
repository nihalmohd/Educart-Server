"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MentorRouter = void 0;
const express_1 = require("express");
const MentorSignUp_1 = require("../controller/Mentor/MentorSignUp");
const MentorLogin_1 = require("../controller/Mentor/MentorLogin");
const MentorShowCategory_1 = require("../controller/Mentor/MentorShowCategory");
const MentorTakeSubCategory_1 = require("../controller/Mentor/MentorTakeSubCategory");
const MentorCourseAndClass_1 = require("../controller/Mentor/MentorCourseAndClass");
const MentorAuthorization_1 = __importDefault(require("../middlewar/MentorAuthorization"));
const MentorTakeCourseByMentor_1 = require("../controller/Mentor/MentorTakeCourseByMentor");
const MentorAddClasses_1 = require("../controller/Mentor/MentorAddClasses");
const MenorTakeById_1 = require("../controller/Mentor/MenorTakeById");
const MentorProfileUpdate_1 = require("../controller/Mentor/MentorProfileUpdate");
const UserShowCourseById_1 = require("../controller/User/UserShowCourseById");
exports.MentorRouter = (0, express_1.Router)();
exports.MentorRouter.get("/", (req, res) => {
    console.log("Mentor working");
    res.status(200).json({ status: "done" });
});
exports.MentorRouter.post("/MentorRegister", MentorSignUp_1.MentorRegister);
exports.MentorRouter.post("/MentorLogin", MentorLogin_1.MentorLogin);
// mentor category get
exports.MentorRouter.get("/MentorDisplayCategories", MentorAuthorization_1.default, MentorShowCategory_1.MenotorShowCategory);
exports.MentorRouter.get("/MentorTakeSubcayegory", MentorAuthorization_1.default, MentorTakeSubCategory_1.MenotorTakeSubCategory);
//Mentor  Add Classes 
exports.MentorRouter.get("/MentorTakeCourseByName", MentorAuthorization_1.default, MentorTakeCourseByMentor_1.MentorTakeCourseByName);
exports.MentorRouter.post("/MentorAddCoruseAndClass", MentorAuthorization_1.default, MentorCourseAndClass_1.MentorAddCourse);
exports.MentorRouter.post("/MentorAddClasses", MentorAuthorization_1.default, MentorAddClasses_1.AddClasses);
exports.MentorRouter.get("/ProfileTakeMentor", MentorAuthorization_1.default, MenorTakeById_1.MentorTakeById);
exports.MentorRouter.post("/UpdateMentorProfile", MentorAuthorization_1.default, MentorProfileUpdate_1.MentorProfileUpdate);
exports.MentorRouter.get('/takeCoursebyid', MentorAuthorization_1.default, UserShowCourseById_1.showCourseByid);
