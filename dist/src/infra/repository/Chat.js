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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRepositoryIMP = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongodb_1 = require("mongodb");
const ChatRepositoryIMP = (chatmodel) => {
    // const creatChat = async(UserId:string,MentorId:string):Promise<Chat >=>{
    //     console.log(UserId,MentorId,"is ok");
    //   const CreatedChat = await chatmodel.create({UserId:new ObjectId(UserId),MentorId:new ObjectId(MentorId)})
    //     return CreatedChat 
    //   }
    const FindChat = () => __awaiter(void 0, void 0, void 0, function* () {
        const FoundChat = yield chatmodel.find();
        return FoundChat;
    });
    const FindMentor = (MentorId) => __awaiter(void 0, void 0, void 0, function* () {
        const FoundedUserByMentorid = yield chatmodel.find({ UserId: new mongodb_1.ObjectId(MentorId) });
        return FoundedUserByMentorid;
    });
    const FindByIds = (userId, MentorId) => __awaiter(void 0, void 0, void 0, function* () {
        const FoundedChats = yield chatmodel.find({ $and: [{ userId: userId }, { MentorId: MentorId }] });
        console.log(FoundedChats, "halloow this is shown form backded repository");
        return FoundedChats;
    });
    const FindUser = (UserId) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(UserId, "UserId");
        const FoundedUserByUserid = yield chatmodel.find({ User: new mongodb_1.ObjectId(UserId) }).populate("Mentor");
        return FoundedUserByUserid;
    });
    const createChat = (UserId, MentorId) => __awaiter(void 0, void 0, void 0, function* () {
        const User = new mongoose_1.default.Types.ObjectId(UserId);
        const Mentor = new mongoose_1.default.Types.ObjectId(MentorId);
        const isChat = yield chatmodel.find({ $and: [{ User: UserId }, { Mentor: MentorId }] });
        console.log();
        if (isChat.length > 0) {
            return isChat;
        }
        else {
            const chatData = {
                User,
                Mentor,
            };
            const createdChat = yield chatmodel.create(chatData);
            const fullChat = yield chatmodel
                .find({ _id: createdChat._id });
            console.log(fullChat);
            return fullChat;
        }
    });
    return {
        FindChat,
        FindUser,
        FindMentor,
        FindByIds,
        createChat,
    };
};
exports.ChatRepositoryIMP = ChatRepositoryIMP;
