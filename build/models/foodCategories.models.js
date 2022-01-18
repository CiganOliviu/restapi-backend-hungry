"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    id: Number,
    name: { type: String, required: true },
});
const foodCategoriesModel = mongoose_1.default.model('foodCategoriesModel', schema);
exports.default = foodCategoriesModel;
