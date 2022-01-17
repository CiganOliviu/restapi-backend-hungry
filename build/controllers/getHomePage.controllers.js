"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHomePage = void 0;
const getHomePage = (request, response) => {
    return response.send('Welcome in index');
};
exports.getHomePage = getHomePage;
