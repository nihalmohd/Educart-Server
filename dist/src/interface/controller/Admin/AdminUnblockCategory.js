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
exports.AdminUnBlockCategory = void 0;
const Category_1 = require("../../../infra/database/Category");
const AdminCategoryRepo_1 = require("../../../infra/repository/AdminCategoryRepo");
const AdminCategoryMangement_1 = require("../../../app/usecase/admin/AdminCategoryMangement");
const categorydb = Category_1.Category;
const Categoryrepository = (0, AdminCategoryRepo_1.CategoryRepoIMP)(categorydb);
const AdminUnBlockCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.body;
        const UnBlockedCategory = yield (0, AdminCategoryMangement_1.UnblockCategory)(Categoryrepository)(_id);
        if (UnBlockedCategory) {
            res.status(200).json({ message: "Category UnBlocked Successfull" });
        }
        else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Internal server Error" });
    }
});
exports.AdminUnBlockCategory = AdminUnBlockCategory;
