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
exports.createReviewEntryControllers = void 0;
const reviews_model_1 = __importDefault(require("../models/reviews.model"));
function createReviewEntryControllers(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const { numberOfStars, comment, postedOn, editedAt, author } = request.body;
        const newReviewEntry = yield reviews_model_1.default.create({ numberOfStars, comment, postedOn, editedAt, author });
        return response.send(newReviewEntry);
    });
}
exports.createReviewEntryControllers = createReviewEntryControllers;