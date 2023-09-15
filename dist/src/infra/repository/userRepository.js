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
exports.UserRepositoryIMP = void 0;
const mongodb_1 = require("mongodb");
const UserRepositoryIMP = (Usermodel) => {
    const create = (User) => __awaiter(void 0, void 0, void 0, function* () {
        const createdUser = yield Usermodel.create(User);
        console.log("usercreated", createdUser);
        return createdUser.toObject();
    });
    const findByEmail = (UserEmail) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(UserEmail, "userEmail");
        const UserExist = yield Usermodel.findOne({ Email: UserEmail });
        console.log(UserExist === null || UserExist === void 0 ? void 0 : UserExist.toObject());
        return UserExist ? UserExist.toObject() : null;
    });
    const findByUsername = (Username) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(Username);
        const UserNameExist = yield Usermodel.findOne({ Username: Username });
        return UserNameExist ? UserNameExist.toObject() : null;
    });
    const FindUsers = () => __awaiter(void 0, void 0, void 0, function* () {
        const FetchedUsers = yield Usermodel.find();
        return FetchedUsers;
        //    .map((FetchedUsers)=>FetchedUsers.toObject())
    });
    // const findById= async (_id: any):Promise<User | null >=>{
    //        const FindUserById=await Usermodel.findOne({_id:_id})
    //     return FindUserById
    // }
    const UpdateUserStatusTrue = (id) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("kitii kitiiii");
        const UpdateUsers = yield Usermodel.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { Status: false } });
        if (UpdateUsers.matchedCount > 0) {
            console.log("User Block is Ok");
            return UpdateUsers;
        }
    });
    const UpdateUserStatusFalse = (id) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("kitii kitiiii");
        const UpdateUserstrue = yield Usermodel.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { Status: true } });
        if (UpdateUserstrue.matchedCount > 0) {
            console.log("User UnBlock is Ok");
            return UpdateUserstrue;
        }
    });
    const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(id, "user_id");
        const UserGotid = yield Usermodel.findOne({ _id: id });
        console.log(UserGotid === null || UserGotid === void 0 ? void 0 : UserGotid.toObject());
        return UserGotid ? UserGotid.toObject() : null;
    });
    const Updateuser = (id, Username, Image) => __awaiter(void 0, void 0, void 0, function* () {
        const Updateduser = yield Usermodel.updateOne({ _id: id }, { $set: { Username: Username, ProfileImage: Image } });
        if (Updateduser.matchedCount > 0) {
            console.log("User UnBlock is Ok");
            return Updateduser;
        }
    });
    const UserCoruseAraryUpdate = (_id, CourseId) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(_id, "ready", CourseId, "ready");
        const UpdateUserCourseArray = yield Usermodel.updateOne({ _id: new mongodb_1.ObjectId(_id) }, { $push: { courses: CourseId } });
        return UpdateUserCourseArray;
    });
    const FindCourseId = (_id, CourseId) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(_id, CourseId, "nihalllllllllllll");
        const FoundedCourseIdDoc = yield Usermodel.findOne({ _id: _id, courses: { $in: [CourseId] } });
        console.log(FoundedCourseIdDoc, "Founded course id");
        return FoundedCourseIdDoc;
    });
    const FindMycoursebyId = (_id) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(_id, "nihallll");
        const FondedCourse = yield Usermodel.findOne(new mongodb_1.ObjectId(_id)).populate("courses");
        console.log(FondedCourse, "snsnnn");
        return FondedCourse;
    });
    return {
        create,
        findByEmail,
        findByUsername,
        FindUsers,
        UpdateUserStatusTrue,
        UpdateUserStatusFalse,
        findById,
        Updateuser,
        UserCoruseAraryUpdate,
        FindCourseId,
        FindMycoursebyId
    };
};
exports.UserRepositoryIMP = UserRepositoryIMP;
