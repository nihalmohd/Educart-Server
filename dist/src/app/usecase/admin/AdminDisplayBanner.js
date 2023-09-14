"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayBanner = void 0;
const displayBanner = (BannerRepository) => {
    const displayBannerGot = BannerRepository.FindBanner();
    return displayBannerGot;
};
exports.displayBanner = displayBanner;
