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
exports.MentorProfileUpdate = void 0;
const MenterModel_1 = require("../../../infra/database/MenterModel");
const userRepository_1 = require("../../../infra/repository/userRepository");
const MentorUpdate_1 = require("../../../app/usecase/Mentor/MentorUpdate");
const Mentordb = MenterModel_1.mentorSchema;
const MentorRepository = (0, userRepository_1.UserRepositoryIMP)(Mentordb);
const MentorProfileUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = (_a = req.userInfo) === null || _a === void 0 ? void 0 : _a.id;
        const { ImagePreviewProfile, UpdateUsername } = req.body;
        const UpdatedUser = yield (0, MentorUpdate_1.MentorUpdateProfile)(MentorRepository)(id, UpdateUsername, ImagePreviewProfile);
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
exports.MentorProfileUpdate = MentorProfileUpdate;
