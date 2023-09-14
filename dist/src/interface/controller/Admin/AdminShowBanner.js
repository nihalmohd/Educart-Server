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
exports.AdminShowBanner = void 0;
const Banner_1 = require("../../../infra/database/Banner");
const AdminBannerRepository_1 = require("../../../infra/repository/AdminBannerRepository");
const AdminDisplayBanner_1 = require("../../../app/usecase/admin/AdminDisplayBanner");
const BannerDb = Banner_1.Banner;
const BannerRepository = (0, AdminBannerRepository_1.BannerRepositoryIMP)(BannerDb);
const AdminShowBanner = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Banner = yield (0, AdminDisplayBanner_1.displayBanner)(BannerRepository);
        if (Banner) {
            res.status(200).json({ message: "Banner Founded Succesfully", Banner });
        }
        else {
            res.status(400).json({ message: "Banner Did't got here ERROR" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.AdminShowBanner = AdminShowBanner;