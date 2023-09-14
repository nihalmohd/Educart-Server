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
exports.login = void 0;
const Login_1 = require("../../../app/usecase/user/Login");
const userModel_1 = require("../../../infra/database/userModel");
const userRepository_1 = require("../../../infra/repository/userRepository");
const JwtAuthetication_1 = require("../../../Utils/JwtAuthetication");
const db = userModel_1.Userscheam;
const userRepository = (0, userRepository_1.UserRepositoryIMP)(db);
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Username, Password } = req.body;
    console.log(Username, Password + "Login test");
    try {
        const logincheck = yield (0, Login_1.Login)(userRepository)(Username, Password);
        if (logincheck) {
            if (logincheck.Status) {
                console.log(logincheck, "logincheckKitii");
                const { _id, role } = JSON.parse(JSON.stringify(logincheck));
                console.log("logeeed");
                const AccessToken = (0, JwtAuthetication_1.generateAccessToken)(_id, role);
                res.status(200).json({ message: "login succesfull", logincheck, AccessToken });
            }
            else {
                res.status(401).json({ message: "Unauthorized Request" });
            }
        }
        else {
            res.status(401).jsonp({ message: "User Not Found" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Internal server Error" });
    }
});
exports.login = login;
