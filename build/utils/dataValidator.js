"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatusBasedOnData = exports.getClientMessageBasedOnData = void 0;
const getClientMessageBasedOnData = (data) => {
    if (data) {
        console.log(`Data ${data} was updated!`);
    }
};
exports.getClientMessageBasedOnData = getClientMessageBasedOnData;
const getStatusBasedOnData = (data, response) => {
    if (data) {
        return response.status(200).json();
    }
    return response.status(400).json();
};
exports.getStatusBasedOnData = getStatusBasedOnData;
