import mongoose from 'mongoose';
import { Request, Response } from "express";
import { requestMethods } from "../configurations/configurations";
import { CountriesModel } from "../models/countries.model";

export async function processGetRequest(response: Response, 
    model: mongoose.Model<CountriesModel>): Promise<Response> {
    
    const data = await model.find({});
    return response.send(data);
}

export async function processPostRequest(response: Response, objectFields: CountriesModel, model: mongoose.Model<CountriesModel>): Promise<Response> {
    
    const newEntry = await model.create(objectFields);
    return response.send(newEntry);
}

export async function processDeleteRequest(response: Response, objectId: CountriesModel, model: mongoose.Model<CountriesModel>): Promise<Response> {

    const deleteEntry = await model.deleteOne({ _id: objectId._id });
    return response.send(deleteEntry);
}

export async function processUpdateRequest(response: Response, objectField: CountriesModel, 
    updatedData: mongoose.UpdateQuery<CountriesModel>, model: mongoose.Model<CountriesModel>): Promise<Response> {

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


