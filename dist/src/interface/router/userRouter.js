"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get("/", (req, res) => {
    console.log("working");
    res.status(200).json({ status: "done" });
});
// //Post sign Up
// userRouter.post("/user/register",register)
// userRouter.post("/user/login",login)
// userRouter.post("/user/OTP",OTPAuth)
// userRouter.post("/user/ForgotPassword",ForgotOtp)
// userRouter.post("/user/VerifyOTP",OTPVerification)
// // Home get
// userRouter.get("/user/GetBanners",UserAutherization,AdminShowBanner)
// userRouter.get("/ShowCategory",UserAutherization,Showcategory)
// userRouter.get("/showCourse",UserAutherization,showCourse)
// userRouter.get('/TakeCouresByCategory',UserAutherization,TakeCourseByCategory)
// //profile get 
// userRouter.get('/ProfileTakeUser',UserAutherization,UserTakeProfile)
// //profile post
// userRouter.post('/UpdateProfile',UserAutherization,UserProfileUpdate)
// //Course Details get 
// userRouter.get("/CourseDeatailsByid",UserAutherization,showCourseByid)
// //Course Details post
// userRouter.post("/UpdateCouseid",UserAutherization,UerCouseListUpdate)
// userRouter.post("/UpdatedCouseIdtake",UserAutherization,UserTakeCourseIdOnUser)
// //Category
// userRouter.get("/takeSubcategory",UserAutherization,UserTakeSubCategory)
// userRouter.get("/TakeMycourses",UserAutherization,takeMycourses)
// //Chat 
// userRouter.post ("/AddChat",UserAutherization,AddChat)
// userRouter.get("/GetMentors",UserAutherization,TakeMentors)
