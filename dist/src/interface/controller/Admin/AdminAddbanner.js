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
exports.AdminCreateBanner = void 0;
const Banner_1 = require("../../../infra/database/Banner");
const AdminBannerRepository_1 = require("../../../infra/repository/AdminBannerRepository");
const AdminAddBanner_1 = require("../../../app/usecase/admin/AdminAddBanner");
const BannerDb = Banner_1.Banner;
const BannerRepository = (0, AdminBannerRepository_1.BannerRepositoryIMP)(BannerDb);
const AdminCreateBanner = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("hloooooo");
    try {
        const { Image, Content } = req.body;
        console.log(req.body);
        console.log(Content, Image, "contor");
        ``;
        const BannerData = yield (0, AdminAddBanner_1.Addbanner)(BannerRepository)(Image, Content);
        if (BannerData) {
            res.status(200).json({ message: "Banner Uploaded", BannerData });
        }
        else {
            res.status(400).json({ message: "Something Went Wrong" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.AdminCreateBanner = AdminCreateBanner;
