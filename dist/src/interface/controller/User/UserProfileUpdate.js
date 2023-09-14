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
exports.UserProfileUpdate = void 0;
const userModel_1 = require("../../../infra/database/userModel");
const userRepository_1 = require("../../../infra/repository/userRepository");
const Updateuser_1 = require("../../../app/usecase/user/Updateuser");
const db = userModel_1.Userscheam;
const userRepository = (0, userRepository_1.UserRepositoryIMP)(db);
const UserProfileUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = (_a = req.userInfo) === null || _a === void 0 ? void 0 : _a.id;
        const { ImagePreviewProfile, UpdateUsername } = req.body;
        const UpdatedUser = yield (0, Updateuser_1.UpdateuserProfile)(userRepository)(id, UpdateUsername, ImagePreviewProfile);
        if (UpdatedUser) {
            res.status(200).json({ message: "Updation is successfull", UpdatedUser });
        }
        else {
            res.status(401).json({ message: "something went wrong" });
        }
    }
    catch (error) {
        res.status(200).json({ message: "Internal Server Error" });
    }
});
exports.UserProfileUpdate = UserProfileUpdate;
