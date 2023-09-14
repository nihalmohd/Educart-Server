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
exports.AdminRepositoryIMP = void 0;
const AdminRepositoryIMP = (Adminmodel) => {
    const FindByEmail = (Email) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(Email);
        const AdminExist = yield Adminmodel.findOne({ Email: Email });
        console.log(AdminExist === null || AdminExist === void 0 ? void 0 : AdminExist.toObject());
        return AdminExist ? AdminExist.toObject() : null;
    });
    return {
        FindByEmail
    };
};
exports.AdminRepositoryIMP = AdminRepositoryIMP;
