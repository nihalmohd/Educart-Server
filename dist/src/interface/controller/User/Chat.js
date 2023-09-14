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
exports.AddChat = void 0;
const Chat_1 = require("../../../infra/database/Chat");
const Chat_2 = require("../../../infra/repository/Chat");
const AddChat_1 = require("../../../app/usecase/Chat/AddChat");
const Chatdb = Chat_1.chatModel;
const chatRepsitory = (0, Chat_2.ChatRepositoryIMP)(Chatdb);
const AddChat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.userInfo;
        const UserId = user === null || user === void 0 ? void 0 : user.id;
        const MentorId = req.body.MentorId;
        console.log(MentorId, UserId, " Kitnnunnndo");
        const FoundedChats = yield (0, AddChat_1.AddChats)(chatRepsitory)(UserId, MentorId);
        if (FoundedChats) {
            res.status(200).json({ message: "Course Added Successfully", FoundedChats });
        }
        else {
            res.status(401).json({ message: "something went wrong" });
        }
    }
    catch (error) {
        res.status(501).json({ message: "internal server error" });
    }
});
exports.AddChat = AddChat;
