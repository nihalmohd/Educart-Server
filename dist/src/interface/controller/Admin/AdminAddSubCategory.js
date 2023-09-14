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
exports.AdminAddSubcategory = void 0;
const Category_1 = require("../../../infra/database/Category");
const AdminCategoryRepo_1 = require("../../../infra/repository/AdminCategoryRepo");
const AdminAddSubcategory_1 = require("../../../app/usecase/admin/AdminAddSubcategory");
const categorydb = Category_1.Category;
const Categoryrepository = (0, AdminCategoryRepo_1.CategoryRepoIMP)(categorydb);
const AdminAddSubcategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id, Subcategory } = req.body;
        const CreatedSubcategory = yield (0, AdminAddSubcategory_1.SubCategoryAdd)(Categoryrepository)(_id, Subcategory);
        if (CreatedSubcategory) {
            res.status(200).json({ message: "Subcategory Added Successfull" });
        }
        else {
            res.status(400).json({ message: "something Went Wrong" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.AdminAddSubcategory = AdminAddSubcategory;
