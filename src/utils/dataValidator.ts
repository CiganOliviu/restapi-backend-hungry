import { Response } from "express";

export const getClientMessageBasedOnData = (data: any) => {
    if (data) {
        console.log(`Data ${data} was updated!`);
    }
};

export const getStatusBasedOnData = (data: any, response: Response, ) => {
    if (data) {
        return response.status(200).json();
    }

    return response.status(400).json();

};