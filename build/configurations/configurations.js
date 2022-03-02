"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestMethods = exports.configurations = void 0;
exports.configurations = {
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
