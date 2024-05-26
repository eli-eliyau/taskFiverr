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
exports.getSuperhero = void 0;
const Superhero_1 = __importDefault(require("../../models/Superhero"));
const getSuperhero = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.query);
    try {
        const { page = 1, limit = 10 } = req.query;
        const skip = (Number(page) - 1) * Number(limit);
        const superheroes = yield Superhero_1.default.find({}, { _id: 0, __v: 0 });
        res.status(200).json(superheroes);
    }
    catch (error) {
        res.status(500).json({ message: 'Error receiving data', error });
    }
});
exports.getSuperhero = getSuperhero;
