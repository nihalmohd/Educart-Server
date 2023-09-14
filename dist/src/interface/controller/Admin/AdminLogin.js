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
exports.Adminlogin = void 0;
const AdminLogin_1 = require("../../../app/usecase/admin/AdminLogin");
const AdminModel_1 = require("../../../infra/database/AdminModel");
const AdminRepository_1 = require("../../../infra/repository/AdminRepository");
const JwtAuthetication_1 = require("../../../Utils/JwtAuthetication");
const db = AdminModel_1.adminSchema;
const AdminRepository = (0, AdminRepository_1.AdminRepositoryIMP)(db);
const Adminlogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Email, Password } = req.body;
    console.log(Email, Password);
    try {
        const Adminlogincheck = yield (0, AdminLogin_1.AdminLogin)(AdminRepository)(Email, Password);
        console.log(Adminlogincheck, "fllllllllllllllll");
        if (Adminlogincheck === null) {
            res.status(401).json({ message: "Invalid credential" });
        }
        else {
            const { _id, role } = JSON.parse(JSON.stringify(Adminlogincheck));
            const AdminAccessToken = (0, JwtAuthetication_1.generateAccessToken)(_id, role);
            res.status(200).json({ message: " Admin login succesfull", Adminlogincheck, AdminAccessToken });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Internal server Error" });
    }
});
exports.Adminlogin = Adminlogin;
