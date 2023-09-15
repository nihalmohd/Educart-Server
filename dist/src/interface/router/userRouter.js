"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const usercontorller_1 = require("../controller/User/usercontorller");
const UserloginController_1 = require("../controller/User/UserloginController");
const UserOTPAuth_1 = require("../controller/User/UserOTPAuth");
const forgotEmail_1 = require("../controller/User/forgotEmail");
const OTPVerification_1 = require("../controller/User/OTPVerification");
const AdminShowBanner_1 = require("../controller/Admin/AdminShowBanner");
const UserAuthVerification_1 = __importDefault(require("../middlewar/UserAuthVerification"));
const userShowCategory_1 = require("../controller/User/userShowCategory");
const UserShowCourse_1 = require("../controller/User/UserShowCourse");
const UserShowCourseById_1 = require("../controller/User/UserShowCourseById");
const TakeCourseByCategory_1 = require("../controller/User/TakeCourseByCategory");
const UserTakeProfile_1 = require("../controller/User/UserTakeProfile");
const UserProfileUpdate_1 = require("../controller/User/UserProfileUpdate");
const UerCouseListUpdate_1 = require("../controller/User/UerCouseListUpdate");
const UserTakeCourseIdOnUser_1 = require("../controller/User/UserTakeCourseIdOnUser");
const takeSubcategory_1 = require("../controller/User/takeSubcategory");
const takeMycourses_1 = require("../controller/User/takeMycourses");
const Chat_1 = require("../controller/User/Chat");
// import { MentorTakeByUserId } from "../../app/usecase/Chat/MentorTakebyUserId";
const TakeMentorsByUserId_1 = require("../controller/User/TakeMentorsByUserId");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get("/", (req, res) => {
    console.log("working");
    res.status(200).json({ status: "done" });
});
//Post sign Up
exports.userRouter.post("/user/register", usercontorller_1.register);
exports.userRouter.post("/user/login", UserloginController_1.login);
exports.userRouter.post("/user/OTP", UserOTPAuth_1.OTPAuth);
exports.userRouter.post("/user/ForgotPassword", forgotEmail_1.ForgotOtp);
exports.userRouter.post("/user/VerifyOTP", OTPVerification_1.OTPVerification);
// Home get
exports.userRouter.get("/user/GetBanners", UserAuthVerification_1.default, AdminShowBanner_1.AdminShowBanner);
exports.userRouter.get("/ShowCategory", UserAuthVerification_1.default, userShowCategory_1.Showcategory);
exports.userRouter.get("/showCourse", UserAuthVerification_1.default, UserShowCourse_1.showCourse);
exports.userRouter.get('/TakeCouresByCategory', UserAuthVerification_1.default, TakeCourseByCategory_1.TakeCourseByCategory);
//profile get 
exports.userRouter.get('/ProfileTakeUser', UserAuthVerification_1.default, UserTakeProfile_1.UserTakeProfile);
//profile post
exports.userRouter.post('/UpdateProfile', UserAuthVerification_1.default, UserProfileUpdate_1.UserProfileUpdate);
//Course Details get 
exports.userRouter.get("/CourseDeatailsByid", UserAuthVerification_1.default, UserShowCourseById_1.showCourseByid);
//Course Details post
exports.userRouter.post("/UpdateCouseid", UserAuthVerification_1.default, UerCouseListUpdate_1.UerCouseListUpdate);
exports.userRouter.post("/UpdatedCouseIdtake", UserAuthVerification_1.default, UserTakeCourseIdOnUser_1.UserTakeCourseIdOnUser);
//Category
exports.userRouter.get("/takeSubcategory", UserAuthVerification_1.default, takeSubcategory_1.UserTakeSubCategory);
exports.userRouter.get("/TakeMycourses", UserAuthVerification_1.default, takeMycourses_1.takeMycourses);
//Chat 
exports.userRouter.post("/AddChat", UserAuthVerification_1.default, Chat_1.AddChat);
exports.userRouter.get("/GetMentors", UserAuthVerification_1.default, TakeMentorsByUserId_1.TakeMentors);
