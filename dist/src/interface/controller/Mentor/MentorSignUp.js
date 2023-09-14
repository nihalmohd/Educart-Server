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
exports.MentorRegister = void 0;
const JwtAuthetication_1 = require("../../../Utils/JwtAuthetication");
const Exist_1 = require("../../../app/usecase/user/Exist");
const Register_1 = require("../../../app/usecase/user/Register");
const MenterModel_1 = require("../../../infra/database/MenterModel");
const userRepository_1 = require("../../../infra/repository/userRepository");
const Mentordb = MenterModel_1.mentorSchema;
const MentorRepository = (0, userRepository_1.UserRepositoryIMP)(Mentordb);
const MentorRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Username, Email, Password, IsGoogle } = req.body;
    console.log(Username, Email, Password, IsGoogle);
    try {
        const UserExit = yield (0, Exist_1.Exist)(MentorRepository)(Email);
        console.log(UserExit);
        if (UserExit === null) {
            const User = yield (0, Register_1.Register)(MentorRepository)(Username, Email, Password);
            if (User) {
                const { _id, role } = JSON.parse(JSON.stringify(User));
                const AccessToken = (0, JwtAuthetication_1.generateAccessToken)(_id, role);
                res.status(200).json({ message: "Sign Up successfull", User, AccessToken });
            }
            else {
                res.status(401).json({ message: "Invalid Cridential" });
            }
        }
        else if (IsGoogle === true) {
            const { _id, role } = JSON.parse(JSON.stringify(UserExit));
            const AccessToken = (0, JwtAuthetication_1.generateAccessToken)(_id, role);
            res.status(200).json({ message: "google signUp Succesfull", UserExit, AccessToken });
        }
        else if (UserExit.Email === Email) {
            res.status(401).json({ message: "Email already Exist" });
        }
        else if (UserExit.Username === Username) {
            res.status(401).json({ message: "Username already Exist" });
        }
        else if (UserExit.Password === Password) {
            res.status(401).json({ message: "Password already Exist" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.MentorRegister = MentorRegister;
