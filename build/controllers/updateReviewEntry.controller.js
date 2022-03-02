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
exports.updateReviewEntryController = void 0;
const reviews_model_1 = __importDefault(require("../models/reviews.model"));
const dataValidator_1 = require("../utils/dataValidator");
function updateReviewEntryController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const { numberOfStars, numberOfStarsToUpdate, comment, commentToUpdate, postedOn, postedOnToUpdate, editedAt, editedAtToUpdate, author, authorToUpdate, } = request.body;
        const filterData = {
            numberOfStars: numberOfStars,
            comment: comment,
            postedOn: postedOn,
            editedAt: editedAt,
            author: author
        };
        const updateData = {
            numberOfStars: numberOfStarsToUpdate,
            comment: commentToUpdate,
            postedOn: postedOnToUpdate,
            editedAt: editedAtToUpdate,
            author: authorToUpdate
        };
        const data = yield reviews_model_1.default.findOneAndUpdate(filterData, updateData);
        (0, dataValidator_1.getClientMessageBasedOnData)(data);
        return (0, dataValidator_1.getStatusBasedOnData)(data, response);
    });
}
exports.updateReviewEntryController = updateReviewEntryController;
