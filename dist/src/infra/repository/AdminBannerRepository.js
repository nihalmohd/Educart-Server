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
exports.BannerRepositoryIMP = void 0;
const mongodb_1 = require("mongodb");
const BannerRepositoryIMP = (BannerModel) => {
    const AddBanner = (BannerData) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(BannerData);
        const AddedBanner = yield BannerModel.create(BannerData);
        return AddedBanner.toObject();
    });
    const FindBanner = () => __awaiter(void 0, void 0, void 0, function* () {
        const foundBanner = yield BannerModel.find();
        return foundBanner;
    });
    const HideBanner = (_id) => __awaiter(void 0, void 0, void 0, function* () {
        const FalseUpdatedBanner = yield BannerModel.updateOne({ _id: new mongodb_1.ObjectId(_id) }, { $set: { Status: false } });
        if (FalseUpdatedBanner.matchedCount > 0) {
            console.log("banner Blocked ");
            return FalseUpdatedBanner;
        }
    });
    const VisibleBanner = (_id) => __awaiter(void 0, void 0, void 0, function* () {
        const TrueUpdatedBanner = yield BannerModel.updateOne({ _id: new mongodb_1.ObjectId(_id) }, { $set: { Status: true } });
        if (TrueUpdatedBanner.matchedCount > 0) {
            console.log("banner UnBlocked ");
            return TrueUpdatedBanner;
        }
    });
    return {
        AddBanner,
        FindBanner,
        HideBanner,
        VisibleBanner
    };
};
exports.BannerRepositoryIMP = BannerRepositoryIMP;
