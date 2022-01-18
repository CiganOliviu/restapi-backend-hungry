import { Request, Response } from "express";
import countriesModel from "../models/countries.model";

export async function getCountriesEntries(request: Request, response: Response) {

    const data = await countriesModel.find({});

    return response.send(data);
}