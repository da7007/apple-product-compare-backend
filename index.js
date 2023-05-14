"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_json_1 = __importDefault(require("./data.json"));
const cors_1 = __importDefault(require("cors"));
const api = (0, express_1.default)();
const port = 3001;
api.use((0, cors_1.default)({
    origin: "*"
}));
api.get("/items", (req, res) => {
    res.end(JSON.stringify(data_json_1.default.Items));
});
api.listen(port, () => {
    console.info(`Listening on port ${port}`);
});
