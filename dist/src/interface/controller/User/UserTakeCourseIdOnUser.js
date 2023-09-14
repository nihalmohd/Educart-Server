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
exports.UserTakeCourseIdOnUser = void 0;
const userModel_1 = require("../../../infra/database/userModel");
const userRepository_1 = require("../../../infra/repository/userRepository");
const UpdatedCourseId_1 = require("../../../app/usecase/user/UpdatedCourseId");
const db = userModel_1.Userscheam;
const userRepository = (0, userRepository_1.UserRepositoryIMP)(db);
const UserTakeCourseIdOnUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.userInfo;
    const _id = user === null || user === void 0 ? void 0 : user.id;
    const CourseId = req.body.CourseId;
    try {
        const FoundedCoursidonUser = yield (0, UpdatedCourseId_1.UpdatedCourseId)(userRepository)(_id, CourseId);
        if (FoundedCoursidonUser) {
            res.status(200).json({ message: "Courses id Sucessfully goted", FoundedCoursidonUser });
        }
        else {
            res.status(401).json({ message: "Something went wrong" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.UserTakeCourseIdOnUser = UserTakeCourseIdOnUser;
