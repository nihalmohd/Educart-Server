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
exports.ForgotOtp = void 0;
const userModel_1 = require("../../../infra/database/userModel");
const userRepository_1 = require("../../../infra/repository/userRepository");
const OTP_generator_1 = require("../../../Utils/OTP-generator");
const Exist_1 = require("../../../app/usecase/user/Exist");
const db = userModel_1.Userscheam;
const userRepository = (0, userRepository_1.UserRepositoryIMP)(db);
const ForgotOtp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("hloooooooo");
    const { ForgotEmail } = req.body;
    try {
        const ForgotUser = yield (0, Exist_1.Exist)(userRepository)(ForgotEmail);
        if (ForgotUser) {
            const forgotUserEmail = ForgotUser.Email;
            const ForgotOtp = (0, OTP_generator_1.otpSend)(forgotUserEmail);
            res.status(200).json({ message: "successfull", ForgotOtp });
        }
        else {
            res.status(401).json({ message: "User Not Found" });
        }
    }
    catch (error) {
        res.status(401).json({ message: "internal server error" });
    }
});
exports.ForgotOtp = ForgotOtp;
