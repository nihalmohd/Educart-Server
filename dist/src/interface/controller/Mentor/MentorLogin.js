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
exports.MentorLogin = void 0;
const MenterModel_1 = require("../../../infra/database/MenterModel");
const userRepository_1 = require("../../../infra/repository/userRepository");
const Login_1 = require("../../../app/usecase/user/Login");
const JwtAuthetication_1 = require("../../../Utils/JwtAuthetication");
const Mentordb = MenterModel_1.mentorSchema;
const MentorRepository = (0, userRepository_1.UserRepositoryIMP)(Mentordb);
const MentorLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Username, Password } = req.body;
    console.log(Username, Password);
    try {
        const Mentorlogincheck = yield (0, Login_1.Login)(MentorRepository)(Username, Password);
        console.log(Mentorlogincheck, "MentorLoginCheck");
        if (Mentorlogincheck === null) {
            res.status(401).jsonp({ message: "User Not Found" });
        }
        else if (Mentorlogincheck.Status) {
            const { _id, role } = JSON.parse(JSON.stringify(Mentorlogincheck));
            console.log("logeeed");
            const AccessToken = (0, JwtAuthetication_1.generateAccessToken)(_id, role);
            res.status(200).json({ message: "login succesfull", Mentorlogincheck, AccessToken });
        }
        else {
            res.status(401).json({ message: "Unauthorized Request" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Internal server Error" });
    }
});
exports.MentorLogin = MentorLogin;
