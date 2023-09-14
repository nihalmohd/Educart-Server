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
exports.SubCategoryAdd = void 0;
const SubCategoryAdd = (Categoryrepsitory) => (_id, Subcategory) => __awaiter(void 0, void 0, void 0, function* () {
    const CreateSubCategory = yield Categoryrepsitory.AddSubcategory(_id, Subcategory);
    return CreateSubCategory;
});
exports.SubCategoryAdd = SubCategoryAdd;
