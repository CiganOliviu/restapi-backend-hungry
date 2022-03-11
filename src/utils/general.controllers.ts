import mongoose from 'mongoose';
import { Request, Response } from "express";
import { requestMethods } from "../configurations/configurations";
import { CountriesModel } from "../models/countries.model";
import { ReviewsModel } from '../models/reviews.model';
import { UsersModel } from '../models/users.model';
import { FoodCategoriesModel } from '../models/foodCategories.model';
import { IngredientsModel } from '../models/ingredients.model';
import { RecipesModels } from '../models/recipes.model';
import { SchemasModel } from '../models/schemas.model';

type generalModels = CountriesModel | FoodCategoriesModel | IngredientsModel 
| RecipesModels | ReviewsModel | UsersModel | SchemasModel;

export async function processGetRequest(response: Response, 
    model: mongoose.Model<generalModels>): Promise<Response> {
    
    const data = await model.find({});
    return response.send(data);
}

export async function processPostRequest(request: Request, response: Response, 
    model: mongoose.Model<generalModels>): Promise<Response> {
    
    const data = request.body;
    const newEntry = await model.create(data);
    return response.send(newEntry);
}

export async function processDeleteRequest(request: Request, response: Response,
     model: mongoose.Model<generalModels>): Promise<Response> {

    const requestId = request.body;
    const deleteEntry = await model.deleteOne({ _id: requestId._id });
    return response.send(deleteEntry);
}

export async function processUpdateRequest(response: Response, objectField: CountriesModel, 
    updatedData: mongoose.UpdateQuery<generalModels>,
    model: mongoose.Model<generalModels>): Promise<Response> {

    const updateEntry = await model.findOneAndUpdate({ _id: objectField._id }, updatedData);
    return response.send(updateEntry);
}

export async function getInstanceById(request: Request, 
    response: Response, 
    model: mongoose.Model<generalModels>) {

    const data = await model.findById(request.params.id);
    return response.send(data);
}

export const isGetRequest = (request: Request): boolean => {
    return request.method === requestMethods.GET;
}

export const isPostRequest = (request: Request): boolean => {
    return request.method === requestMethods.POST;
}

export const isDeleteRequest = (request: Request): boolean => {
    return request.method === requestMethods.DELETE;
}

export const isUpdateRequest = (request: Request): boolean => {
    return request.method === requestMethods.UPDATE;
}


