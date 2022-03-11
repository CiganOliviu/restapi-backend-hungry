import { Request, Response } from 'express';
import reviewsModel from '../models/reviews.model';
import { getInstanceById } from '../utils/general.controllers';

export async function getReviewController(request: Request, response: Response) {
    
    return getInstanceById(request, response, reviewsModel);
}