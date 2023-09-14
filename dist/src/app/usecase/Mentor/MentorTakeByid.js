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
exports.MentorCheck = void 0;
const MentorCheck = (UserRepository) => (Username, Password) => __awaiter(void 0, void 0, void 0, function* () {
    const UserNameExist = yield UserRepository.findByUsername(Username);
    if (UserNameExist && UserNameExist.Password === Password) {
        return UserNameExist;
    }
    else {
        return null;
    }
});
exports.MentorCheck = MentorCheck;