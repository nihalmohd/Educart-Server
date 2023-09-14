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
exports.UnBlockUser = exports.BlockUser = void 0;
const BlockUser = (userRepository) => (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("usecasil Yethiiiiii");
    const displayUserGot = yield userRepository.UpdateUserStatusTrue(id);
    console.log(displayUserGot, "ith kittiyo");
    return displayUserGot;
});
exports.BlockUser = BlockUser;
const UnBlockUser = (userRepository) => (id) => __awaiter(void 0, void 0, void 0, function* () {
    const displayUnblockedUserGot = yield userRepository.UpdateUserStatusFalse(id);
    return displayUnblockedUserGot;
});
exports.UnBlockUser = UnBlockUser;
