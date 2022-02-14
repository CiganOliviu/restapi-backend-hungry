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
exports.updateCountryEntryController = void 0;
const countries_model_1 = __importDefault(require("../models/countries.model"));
function updateCountryEntryController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, nameToUpdate } = request.body;
        const filterData = { name: name };
        const updateData = { name: nameToUpdate };
        const data = yield countries_model_1.default.findOneAndUpdate(filterData, updateData);
        if (data) {
            console.log(`Data ${data} was updated!`);
        }
        return response.status(200).json();
    });
}
exports.updateCountryEntryController = updateCountryEntryController;
