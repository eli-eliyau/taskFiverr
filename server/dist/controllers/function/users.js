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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getByID = void 0;
const User_1 = __importDefault(require("../../models/User"));
const axios_1 = __importDefault(require("axios"));
const getByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield axios_1.default.get(`http://superheroapi.com/api/10225405115382482/${req.params}/powerstats`);
        res.send(users);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getByID = getByID;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, role } = req.body;
        if (!name) {
            return res.status(400).send("יש למלא את שם ואת התפקיד.");
        }
        const newUser = yield new User_1.default(req.body, { _id: 0 });
        newUser.save();
        newUser && res.status(201).send(newUser);
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.createUser = createUser;
