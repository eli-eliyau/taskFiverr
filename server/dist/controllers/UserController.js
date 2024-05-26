"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const users_1 = require("./function/users");
exports.UserController = {
    getByID: users_1.getByID,
    createUser: users_1.createUser
};
