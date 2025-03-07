"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const body_parser_1 = __importDefault(require("body-parser"));
require("dotenv").config({ path: "./.env" });
require('./db/connecing');
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4001;
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)({ origin: `${process.env.URL_CLIENT}` }));
app.use('/api', routes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
