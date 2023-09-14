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
exports.CategoryRepoIMP = void 0;
const mongodb_1 = require("mongodb");
const CategoryRepoIMP = (CategoryModel) => {
    const CreateCategory = (CategoryDetail) => __awaiter(void 0, void 0, void 0, function* () {
        const CreatedCategory = yield CategoryModel.create(CategoryDetail);
        return CreatedCategory;
    });
    const findCategory = () => __awaiter(void 0, void 0, void 0, function* () {
        const FoundedCategories = yield CategoryModel.find();
        return FoundedCategories;
    });
    const UpdateStatusFalse = (_id) => __awaiter(void 0, void 0, void 0, function* () {
        const BlockedCategory = yield CategoryModel.updateOne({ _id: new mongodb_1.ObjectId(_id) }, { $set: { Status: false } });
        return BlockedCategory;
    });
    const UpdateStatusTrue = (_id) => __awaiter(void 0, void 0, void 0, function* () {
        const BlockedCategory = yield CategoryModel.updateOne({ _id: new mongodb_1.ObjectId(_id) }, { $set: { Status: true } });
        return BlockedCategory;
    });
    const AddSubcategory = (_id, Subcategory) => __awaiter(void 0, void 0, void 0, function* () {
        const AddedSubcategory = yield CategoryModel.updateOne({ _id: new mongodb_1.ObjectId(_id) }, { $push: { Subcategory: Subcategory } });
        return AddedSubcategory;
    });
    const TakeSubcategory = (Category) => __awaiter(void 0, void 0, void 0, function* () {
        const TookSubcategory = yield CategoryModel.findOne({ Category: Category });
        return TookSubcategory;
    });
    const TakeSubcategoryId = (_id) => __awaiter(void 0, void 0, void 0, function* () {
        const TookSubcategory = yield CategoryModel.findOne({ _id: new mongodb_1.ObjectId(_id) });
        return TookSubcategory;
    });
    return {
        CreateCategory,
        findCategory,
        UpdateStatusFalse,
        UpdateStatusTrue,
        AddSubcategory,
        TakeSubcategory,
        TakeSubcategoryId
    };
};
exports.CategoryRepoIMP = CategoryRepoIMP;
