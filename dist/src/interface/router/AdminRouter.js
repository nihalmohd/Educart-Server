"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRouter = void 0;
const express_1 = require("express");
exports.AdminRouter = (0, express_1.Router)();
exports.AdminRouter.get("/Admin", (req, res) => {
    console.log("working");
    return res.status(200).json({ status: "done" });
});
// post methods
// AdminRouter.post("/Login", Adminlogin);
// AdminRouter.post("/getUsers", AdminAutherization,DisplayUsers)
// AdminRouter.post("/blockUser",AdminAutherization, BlockUserReq)
// AdminRouter.post("/UnblockUser",AdminAutherization, UnBlockUserReq)
// AdminRouter.post("/getMentors",AdminAutherization, DisplayMentors)
// AdminRouter.post("/blockMentor",AdminAutherization, BlockMentorReq)
// AdminRouter.post("/UnblockMentor",AdminAutherization, UnBlockMentorReq)
// AdminRouter.post("/BannerUpload",AdminAutherization, AdminCreateBanner)
// AdminRouter.post("/AdminShowBanner",AdminAutherization,AdminShowBanner)
// AdminRouter.post("/AdminHideBanner",AdminAutherization,AdminHideBanner) 
// AdminRouter.post("/AdminVisibleBanner",AdminAutherization,AdminVisibleBanner) 
// AdminRouter.post("/AdminCategory",AdminAutherization,Addcategory)
// AdminRouter.post("/AdminDisplayCategory",AdminAutherization,ShowCategory)
// AdminRouter.post("/AdminBlockCategory" ,AdminAutherization,AdminBlockCategory)
// AdminRouter.post("/AdminUnBlockCategory" ,AdminAutherization,AdminUnBlockCategory)
// AdminRouter.post("/AdminAddSubcategory",AdminAutherization,AdminAddSubcategory)
// AdminRouter.get("/AdminDisplayCourse",AdminAutherization,AdminDisplayCourse)
// AdminRouter.post("/AdminCourseVisible",AdminAutherization,AdminBlaockCourse)
// AdminRouter.post("/AdminCourseInvisible",AdminAutherization,AdminUnblaockCourse)
