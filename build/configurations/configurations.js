"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestMethods = exports.configurations = void 0;
const express_1 = __importDefault(require("express"));
exports.configurations = {
    app: (0, express_1.default)(),
    port: 8080,
    host: 'localhost',
    dbUrl: "mongodb://localhost:27017/hungry",
};
exports.requestMethods = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
    UPDATE: 'PUT',
};
