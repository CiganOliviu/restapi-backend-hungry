import mongoose from 'mongoose';
import { Request, Response } from "express";
import { requestMethods } from "../configurations/configurations";
import { CountriesModel } from "../models/countries.model";
import { ReviewsModel } from '../models/reviews.model';

export async function processGetRequest(response: Response, 
    model: mongoose.Model<CountriesModel | ReviewsModel>): Promise<Response> {
    
    const data = await model.find({});
    return response.send(data);
}

export async function processPostRequest(request: Request, response: Response, model: mongoose.Model<CountriesModel | ReviewsModel>): Promise<Response> {
    
    const data = request.body;
    const newEntry = await model.create(data);
    return response.send(newEntry);
}

export async function processDeleteRequest(request: Request, response: Response, model: mongoose.Model<CountriesModel | ReviewsModel>): Promise<Response> {

    const requestId = request.body;
    const deleteEntry = await model.deleteOne({ _id: requestId._id });
    return response.send(deleteEntry);
}

export async function processUpdateRequest(response: Response, objectField: CountriesModel, 
    updatedData: mongoose.UpdateQuery<CountriesModel | ReviewsModel>, model: mongoose.Model<CountriesModel | ReviewsModel>): Promise<Response> {

    const updateEntry = await model.findOneAndUpdate({ _id: objectField._id }, updatedData);
    return response.send(updateEntry);
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


