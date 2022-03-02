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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.operateCountryController = void 0;
const countries_model_1 = __importDefault(require("../models/countries.model"));
const general_controllers_1 = require("../utils/general.controllers");
function operateCountryController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        if ((0, general_controllers_1.isGetRequest)(request)) {
            return (0, general_controllers_1.processGetRequest)(response, countries_model_1.default);
        }
        if ((0, general_controllers_1.isPostRequest)(request)) {
            return (0, general_controllers_1.processPostRequest)(request, response, countries_model_1.default);
        }
        if ((0, general_controllers_1.isDeleteRequest)(request)) {
            return (0, general_controllers_1.processDeleteRequest)(request, response, countries_model_1.default);
        }
        if ((0, general_controllers_1.isUpdateRequest)(request)) {
            const requestData = request.body;
            const oldData = yield countries_model_1.default.find({ _id: requestData._id });
            const updatedData = {
                name: requestData.name || oldData[0].name,
            };
            return (0, general_controllers_1.processUpdateRequest)(response, requestData, updatedData, countries_model_1.default);
        }
    });
}
exports.operateCountryController = operateCountryController;
