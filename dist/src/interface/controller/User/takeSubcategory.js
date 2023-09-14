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
exports.UserTakeSubCategory = void 0;
const Category_1 = require("../../../infra/database/Category");
const AdminCategoryRepo_1 = require("../../../infra/repository/AdminCategoryRepo");
const MentorTakeSubcategory_1 = require("../../../app/usecase/Mentor/MentorTakeSubcategory");
const categorydb = Category_1.Category;
const Categoryrepository = (0, AdminCategoryRepo_1.CategoryRepoIMP)(categorydb);
const UserTakeSubCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    console.log(req.query.SelectedCategory, "got");
    const Category = req.query.SelectedCategory;
    console.log(Category, "paramsn id kittiyo");
    try {
        const FoundedSubCategroy = yield (0, MentorTakeSubcategory_1.MentorTakeSubCategory)(Categoryrepository)(Category);
        if (FoundedSubCategroy) {
            res.status(200).json({ message: "SubCategory founded completely", FoundedSubCategroy });
        }
        else {
            res.status(400).json({ message: "something went wrong" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Internal server Error" });
    }
});
exports.UserTakeSubCategory = UserTakeSubCategory;
