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
exports.MenotorShowCategory = void 0;
const Category_1 = require("../../../infra/database/Category");
const AdminCategoryRepo_1 = require("../../../infra/repository/AdminCategoryRepo");
const AdminShowCategory_1 = require("../../../app/usecase/admin/AdminShowCategory");
const categorydb = Category_1.Category;
const Categoryrepository = (0, AdminCategoryRepo_1.CategoryRepoIMP)(categorydb);
const MenotorShowCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const FoundedCategroy = yield (0, AdminShowCategory_1.DisplayCategoryes)(Categoryrepository);
        if (FoundedCategroy) {
            res.status(200).json({ message: "Category founded completely", FoundedCategroy });
        }
        else {
            res.status(400).json({ message: "something went wrong" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Internal server Error" });
    }
});
exports.MenotorShowCategory = MenotorShowCategory;
