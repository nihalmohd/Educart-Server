"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayUsers = void 0;
const displayUsers = (userRepository) => {
    const displayUserGot = userRepository.FindUsers();
    return displayUserGot;
};
exports.displayUsers = displayUsers;
