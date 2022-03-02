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
exports.updateSchemaEntryController = void 0;
const schemas_model_1 = __importDefault(require("../models/schemas.model"));
const dataValidator_1 = require("../utils/dataValidator");
function updateSchemaEntryController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, nameToUpdate } = request.body;
        const filterData = { name: name };
        const updateData = { name: nameToUpdate };
        const data = yield schemas_model_1.default.findOneAndUpdate(filterData, updateData);
        (0, dataValidator_1.getClientMessageBasedOnData)(data);
        return (0, dataValidator_1.getStatusBasedOnData)(data, response);
    });
}
exports.updateSchemaEntryController = updateSchemaEntryController;
