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
exports.OTPVerification = void 0;
const OTP_1 = require("../../../infra/database/OTP");
const OTP_repository_1 = require("../../../infra/repository/OTP.repository");
const OTPVerification_1 = require("../../../app/usecase/user/OTPVerification");
const OTPScheam = OTP_1.OTPSchema;
const OTPUserRepository = (0, OTP_repository_1.OTPRepositoryIMP)(OTPScheam);
const OTPVerification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Email, OTP } = req.body;
    console.log("hlooooooo", Email, OTP);
    try {
        // console.log("OTPUserRepository:", OTPUserRepository);
        const storedOTP = yield (0, OTPVerification_1.FindOTP)(OTPUserRepository)(Email);
        console.log("storedOTP:", storedOTP);
        if (storedOTP) {
            if ((storedOTP === null || storedOTP === void 0 ? void 0 : storedOTP.OTP) === OTP) {
                console.log("complete");
                res.status(200).json({ message: "Register Completed", Status: true });
            }
            else {
                res.status(400).json({ messge: "Please enter a valid OTP", Status: false });
            }
        }
        else {
            res.status(400).json("Invalid Cridential");
        }
    }
    catch (error) {
        console.log("Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.OTPVerification = OTPVerification;
