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
exports.operateCountryController = void 0;
const general_controllers_1 = require("../utils/general.controllers");
function operateCountryController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        if ((0, general_controllers_1.isGetRequest)(request)) {
            return 'GET';
        }
        if ((0, general_controllers_1.isPostRequest)(request)) {
            return 'POST';
        }
        if ((0, general_controllers_1.isDeleteRequest)(request)) {
            return 'DELETE';
        }
        if ((0, general_controllers_1.isUpdateRequest)(request)) {
            return 'UPDATE';
        }
    });
}
exports.operateCountryController = operateCountryController;
