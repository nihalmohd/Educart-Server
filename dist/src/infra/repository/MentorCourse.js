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
exports.MentorCourseIMP = void 0;
const mongodb_1 = require("mongodb");
const MentorCourseIMP = (CourseRepository) => {
    const CreateCourse = (CourseDetails) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log(CourseDetails);
        const CreatedCourse = yield CourseRepository.create(CourseDetails);
        console.log(CreatedCourse ? CreatedCourse : null, "nothing is getting");
        return CreatedCourse;
    });
    const FindCourseById = (_id) => __awaiter(void 0, void 0, void 0, function* () {
        const FoundedCourseByI = yield CourseRepository.findOne({ _id: _id });
        return FoundedCourseByI === null || FoundedCourseByI === void 0 ? void 0 : FoundedCourseByI.toObject();
    });
    const FindCourse = () => __awaiter(void 0, void 0, void 0, function* () {
        const FoundedCourse = yield CourseRepository.find();
        return FoundedCourse;
    });
    const BlockCourseByid = (_id) => __awaiter(void 0, void 0, void 0, function* () {
        const BlockedCouuse = yield CourseRepository.updateOne({ _id: new mongodb_1.ObjectId(_id) }, { $set: { Status: false } });
        return BlockedCouuse;
    });
    const UnblacockCourseByid = (_id) => __awaiter(void 0, void 0, void 0, function* () {
        const UnblockedCourse = yield CourseRepository.updateOne({ _id: new mongodb_1.ObjectId(_id) }, { $set: { Status: true } });
        return UnblockedCourse;
    });
    const CourseBycateogry = (Category) => __awaiter(void 0, void 0, void 0, function* () {
        const FoundedCourseByCategory = yield CourseRepository.find({ SelectedCategory: Category });
        return FoundedCourseByCategory;
    });
    const CourseBySubcateogry = (SubCategory) => __awaiter(void 0, void 0, void 0, function* () {
        const FoundedCourseBySubCategory = yield CourseRepository.find({ SelectedSubCategory: SubCategory });
        return FoundedCourseBySubCategory;
    });
    const MentorTakeCourseByName = (Mentorname) => __awaiter(void 0, void 0, void 0, function* () {
        const FoundedCourseByName = yield CourseRepository.find({ Mentorname: Mentorname });
        return FoundedCourseByName;
    });
    const MentorAddClasses = (_id, Classdatas) => __awaiter(void 0, void 0, void 0, function* () {
        const ClassUpdatedCourse = yield CourseRepository.updateOne({ _id: new mongodb_1.ObjectId(_id) }, { $push: { Class: Classdatas } });
        return ClassUpdatedCourse;
    });
    return {
        CreateCourse,
        FindCourseById,
        FindCourse,
        BlockCourseByid,
        UnblacockCourseByid,
        CourseBycateogry,
        CourseBySubcateogry,
        MentorTakeCourseByName,
        MentorAddClasses
    };
};
exports.MentorCourseIMP = MentorCourseIMP;
