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
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUpdateRequest = exports.isDeleteRequest = exports.isPostRequest = exports.isGetRequest = exports.processUpdateRequest = exports.processDeleteRequest = exports.processPostRequest = exports.processGetRequest = void 0;
const configurations_1 = require("../configurations/configurations");
function processGetRequest(response, model) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield model.find({});
        return response.send(data);
    });
}
exports.processGetRequest = processGetRequest;
function processPostRequest(response, objectFields, model) {
    return __awaiter(this, void 0, void 0, function* () {
        const newEntry = yield model.create(objectFields);
        return response.send(newEntry);
    });
}
exports.processPostRequest = processPostRequest;
function processDeleteRequest(response, objectId, model) {
    return __awaiter(this, void 0, void 0, function* () {
        const deleteEntry = yield model.deleteOne({ _id: objectId._id });
        return response.send(deleteEntry);
    });
}
exports.processDeleteRequest = processDeleteRequest;
function processUpdateRequest(response, objectField, updatedData, model) {
    return __awaiter(this, void 0, void 0, function* () {
        const updateEntry = yield model.findOneAndUpdate({ _id: objectField._id }, updatedData);
        return response.send(updateEntry);
    });
}
exports.processUpdateRequest = processUpdateRequest;
const isGetRequest = (request) => {
    return request.method === configurations_1.requestMethods.GET;
};
exports.isGetRequest = isGetRequest;
const isPostRequest = (request) => {
    return request.method === configurations_1.requestMethods.POST;
};
exports.isPostRequest = isPostRequest;
const isDeleteRequest = (request) => {
    return request.method === configurations_1.requestMethods.DELETE;
};
exports.isDeleteRequest = isDeleteRequest;
const isUpdateRequest = (request) => {
    return request.method === configurations_1.requestMethods.UPDATE;
};
exports.isUpdateRequest = isUpdateRequest;
