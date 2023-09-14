"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayCategoryes = void 0;
const DisplayCategoryes = (CategoryRep) => {
    const displayCategoryGot = CategoryRep.findCategory();
    return displayCategoryGot;
};
exports.DisplayCategoryes = DisplayCategoryes;
