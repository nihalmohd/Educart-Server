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
exports.UerCouseListUpdate = void 0;
const userModel_1 = require("../../../infra/database/userModel");
const userRepository_1 = require("../../../infra/repository/userRepository");
const UpdateCourseArray_1 = require("../../../app/usecase/user/UpdateCourseArray");
const db = userModel_1.Userscheam;
const userRepository = (0, userRepository_1.UserRepositoryIMP)(db);
const UerCouseListUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.userInfo;
        const _id = user === null || user === void 0 ? void 0 : user.id;
        console.log(_id);
        const CourseId = req.body.CourseId;
        console.log(CourseId, "bodry", req.body);
        const UpdatedCourseId = yield (0, UpdateCourseArray_1.UpdatedUserCourseArray)(userRepository)(_id, CourseId);
        if (UpdatedCourseId) {
            res.status(200).json({ message: "successfull Updated", UpdatedCourseId });
        }
        else {
            res.status(401).json({ message: "something went wrong" });
        }
    }
    catch (error) {
        res.json({ message: "Internal server Error" });
    }
});
exports.UerCouseListUpdate = UerCouseListUpdate;
