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
exports.Addcategory = void 0;
const Category_1 = require("../../../infra/database/Category");
const AdminCategoryRepo_1 = require("../../../infra/repository/AdminCategoryRepo");
const AdminCategory_1 = require("../../../app/usecase/admin/AdminCategory");
const AdminShowCategory_1 = require("../../../app/usecase/admin/AdminShowCategory");
const categorydb = Category_1.Category;
const Categoryrepository = (0, AdminCategoryRepo_1.CategoryRepoIMP)(categorydb);
const Addcategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Category, SubCategory } = req.body;
    try {
        const Categoryexist = yield (0, AdminShowCategory_1.DisplayCategoryes)(Categoryrepository);
        if (!Categoryexist) {
            const CreatedCategory = yield (0, AdminCategory_1.CategoryAdd)(Categoryrepository)(Category, SubCategory);
            if (CreatedCategory) {
                res.status(200).json({ message: "Category Created successfull", CreatedCategory });
            }
            else {
                res.status(401).json({ message: "Something went wrong" });
            }
        }
        else {
            res.status(401).json({ message: "category is Already Existg" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Internal server Error" });
    }
});
exports.Addcategory = Addcategory;
