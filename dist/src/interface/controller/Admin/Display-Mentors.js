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
exports.DisplayMentors = void 0;
const AdminFetchUsers_1 = require("../../../app/usecase/admin/AdminFetchUsers");
const MenterModel_1 = require("../../../infra/database/MenterModel");
const userRepository_1 = require("../../../infra/repository/userRepository");
const Mentordb = MenterModel_1.mentorSchema;
const MentorRepository = (0, userRepository_1.UserRepositoryIMP)(Mentordb);
const DisplayMentors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const DisplayGetUser = yield (0, AdminFetchUsers_1.displayUsers)(MentorRepository);
        if (DisplayGetUser) {
            res.status(201).json({ message: "All Users Got", DisplayGetUser });
        }
    }
    catch (error) {
        res.status(401).json({ message: "Internal server error" });
    }
});
exports.DisplayMentors = DisplayMentors;
