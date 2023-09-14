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
exports.MentorTakeById = void 0;
const MenterModel_1 = require("../../../infra/database/MenterModel");
const userRepository_1 = require("../../../infra/repository/userRepository");
const TakeUserById_1 = require("../../../app/usecase/user/TakeUserById");
const Mentordb = MenterModel_1.mentorSchema;
const MentorRepository = (0, userRepository_1.UserRepositoryIMP)(Mentordb);
const MentorTakeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Mentor = req.userInfo;
        const _id = Mentor === null || Mentor === void 0 ? void 0 : Mentor.id;
        const FoundedMentor = yield (0, TakeUserById_1.TakeUserById)(MentorRepository)(_id);
        if (FoundedMentor) {
            res.status(200).json({ message: "mentor founded successfull", FoundedMentor });
        }
        else {
            res.status(401).json({ message: "something went wrong " });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Internal server Error" });
    }
});
exports.MentorTakeById = MentorTakeById;
