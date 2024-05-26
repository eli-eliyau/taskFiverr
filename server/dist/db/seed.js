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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const Superhero_1 = __importDefault(require("../models/Superhero"));
require("dotenv").config({ path: "./.env" });
require('./connecing');
const seedData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        for (let i = 1; i <= 200; i++) {
            const [superheroDetails, url, alignment] = yield Promise.all([
                axios_1.default.get(`http://superheroapi.com/api/10225405115382482/${i}/powerstats`),
                axios_1.default.get(`https://superheroapi.com/api/10225405115382482/${i}/image`),
                axios_1.default.get(`https://superheroapi.com/api/10225405115382482/${i}/biography`)
            ]);
            const superhero = Object.assign(Object.assign({}, superheroDetails.data), { img: url.data.url, badOrGood: alignment.data.alignment });
            const { id, response } = superhero, cleanSuperhero = __rest(superhero, ["id", "response"]);
            const formattedSuperhero = Object.assign(Object.assign({}, cleanSuperhero), { intelligence: Number(cleanSuperhero.intelligence) || 0, strength: Number(cleanSuperhero.strength) || 0, speed: Number(cleanSuperhero.speed) || 0, durability: Number(cleanSuperhero.durability) || 0, power: Number(cleanSuperhero.power) || 0, combat: Number(cleanSuperhero.combat) || 0 });
            const newSuperhero = new Superhero_1.default(formattedSuperhero);
            yield newSuperhero.save();
        }
        console.log("finish");
    }
    catch (error) {
        console.error(error);
    }
});
seedData();
