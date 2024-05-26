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
const Superhero_1 = __importDefault(require("../../models/Superhero"));
const search = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { category, query } = req.query;
        if (!category || !query) {
            return res.status(400).json({ message: 'Missing category or query parameter' });
        }
        const regex = new RegExp(query, 'i'); // יצירת רג'קס לחיפוש לא תלוי אותיות קטנות/גדולות
        const filter = {};
        filter[category] = regex;
        const results = yield Superhero_1.default.find(filter);
        res.status(200).json(results);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching data', error });
    }
});
