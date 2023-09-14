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
exports.UpdatedCourseId = void 0;
const UpdatedCourseId = (UserRepository) => (_id, CourseId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(_id, CourseId, "usecase");
    const FoundedCourseid = yield UserRepository.FindCourseId(_id, CourseId);
    console.log(FoundedCourseid, "usercase is ok");
    return FoundedCourseid;
});
exports.UpdatedCourseId = UpdatedCourseId;
