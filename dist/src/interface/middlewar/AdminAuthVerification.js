"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JwtAuthetication_1 = __importDefault(require("../../Utils/JwtAuthetication"));
const AdminAutherization = (req, res, next) => {
    try {
        if (req.headers.authorization && req.headers.authorization.startsWith("AdminBearer")) {
            console.log(req.headers.authorization);
            let token = req.headers.authorization.split(" ")[1];
            const { id, role } = JwtAuthetication_1.default.verify(token, process.env.JWT_ACCESS_SECRET);
            req.userInfo = { id, role };
            if (role === "Admin") {
                next();
            }
        }
        else {
            res.status(401).json({ message: "No Access Token Founded" });
        }
    }
    catch (error) {
        res.status(403).json({ message: "Access forbidden ,Invalid token " });
    }
};
exports.default = AdminAutherization;
