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
exports.UserTakeProfile = void 0;
const userModel_1 = require("../../../infra/database/userModel");
const userRepository_1 = require("../../../infra/repository/userRepository");
const TakeUserById_1 = require("../../../app/usecase/user/TakeUserById");
const db = userModel_1.Userscheam;
const userRepository = (0, userRepository_1.UserRepositoryIMP)(db);
const UserTakeProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('helooooo');
    try {
        const user = req.userInfo;
        const id = user === null || user === void 0 ? void 0 : user.id;
        console.log(id, "constroler");
        const FoundedUser = yield (0, TakeUserById_1.TakeUserById)(userRepository)(id);
        console.log(FoundedUser, "contorller");
        if (FoundedUser) {
            res.status(200).json({ message: "User Founded successfully", FoundedUser });
        }
        else {
            res.status(401).json({ message: "soemthing went wrong" });
        }
    }
    catch (error) {
        res.status(501).json({ message: "Internal Server Error" });
    }
});
exports.UserTakeProfile = UserTakeProfile;
