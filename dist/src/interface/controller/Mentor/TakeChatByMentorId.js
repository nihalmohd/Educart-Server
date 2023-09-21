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
exports.TakeUserByMentorId = void 0;
const Chat_1 = require("../../../infra/database/Chat");
const Chat_2 = require("../../../infra/repository/Chat");
const UserTakeByMentorId_1 = require("../../../app/usecase/Chat/UserTakeByMentorId");
const Chatdb = Chat_1.chatModel;
const chatRepsitory = (0, Chat_2.ChatRepositoryIMP)(Chatdb);
const TakeUserByMentorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const User = req.userInfo;
        const MentorId = User === null || User === void 0 ? void 0 : User.id;
        const FoundedUserChat = yield (0, UserTakeByMentorId_1.UserTakeByMentorId)(chatRepsitory)(MentorId);
        if (FoundedUserChat) {
            res.status(200).json({ message: "Founded successfull", FoundedUserChat });
        }
        else {
            res.status(401).json({ message: "something went wrong" });
        }
    }
    catch (error) {
        res.status(501).json({ message: "internal server" });
    }
});
exports.TakeUserByMentorId = TakeUserByMentorId;
