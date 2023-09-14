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
exports.OTPAuth = void 0;
const OTP_generator_1 = require("../../../Utils/OTP-generator");
const OTP_1 = require("../../../infra/database/OTP");
const OTP_repository_1 = require("../../../infra/repository/OTP.repository");
const OTPRegister_1 = require("../../../app/usecase/user/OTPRegister");
const OTPScheam = OTP_1.OTPSchema;
const OTPUserRepository = (0, OTP_repository_1.OTPRepositoryIMP)(OTPScheam);
const OTPAuth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Email } = req.body;
    try {
        const otp = (0, OTP_generator_1.otpSend)(Email);
        const SendOtp = otp.toString();
        console.log(otp);
        const InsertedOtp = yield (0, OTPRegister_1.RegisterOTP)(OTPUserRepository)(Email, SendOtp);
        res.status(200).json({ message: "OTP getted here", status: true });
    }
    catch (_a) {
        res.status(401).json({ message: "Internal server Error" });
    }
});
exports.OTPAuth = OTPAuth;
