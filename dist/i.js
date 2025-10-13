"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const f = async () => {
    const d = await axios_1.default.get("https://ecom-sandras-g6abfyg2azbqekf8.southeastasia-01.azurewebsites.net/api/products");
    return d;
};
f().then((d) => {
    const l = d.data;
    console.log(l.length);
});
//# sourceMappingURL=i.js.map