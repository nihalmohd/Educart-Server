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
exports.BlockUserReq = void 0;
const userModel_1 = require("../../../infra/database/userModel");
const userRepository_1 = require("../../../infra/repository/userRepository");
const AdminUserManagment_1 = require("../../../app/usecase/admin/AdminUserManagment");
const db = userModel_1.Userscheam;
const UserRepository = (0, userRepository_1.UserRepositoryIMP)(db);
const BlockUserReq = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.body;
    console.log(_id, "UserId  kittiiiiiiiiii");
    try {
        const BlockedUser = yield (0, AdminUserManagment_1.BlockUser)(UserRepository)(_id);
        console.log(BlockedUser);
        if (BlockedUser) {
            res.status(200).json({ message: "Block User Succesfull" });
        }
        else {
            res.status(401).json({ message: "Block User is Having Problem" });
        }
    }
    catch (error) {
        res.status(401).json({ message: "Block User Failed" });
    }
});
exports.BlockUserReq = BlockUserReq;
