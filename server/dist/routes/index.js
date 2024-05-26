"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SuperheroController_1 = require("../controllers/SuperheroController");
const router = express_1.default.Router();
router.get('/superhero', SuperheroController_1.SuperheroController.getSuperhero);
exports.default = router;
