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
exports.FidingChat = void 0;
const Chat_1 = require("../../../infra/database/Chat");
const Chat_2 = require("../../../infra/repository/Chat");
const FindChatByIds_1 = require("../../../app/usecase/Chat/FindChatByIds");
const Chatdb = Chat_1.chatModel;
const chatRepsitory = (0, Chat_2.ChatRepositoryIMP)(Chatdb);
const FidingChat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const User = req.userInfo;
        const UserId = User === null || User === void 0 ? void 0 : User.id;
        const { MentorId } = req.body;
        console.log(MentorId, "mentor Id");
        const FoundedChat = yield (0, FindChatByIds_1.FindChatsByIds)(chatRepsitory)(UserId, MentorId);
        if (FoundedChat) {
            res.status(200).json({ message: "Founded Successfull", FoundedChat });
        }
        else {
            res.status(401).json({ message: "something went wrong " });
        }
    }
    catch (error) {
        res.status(501).json({ message: "Internal server Error" });
    }
});
exports.FidingChat = FidingChat;
