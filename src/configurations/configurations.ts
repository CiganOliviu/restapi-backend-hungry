import express from 'express'

export const configurations = {
    app: express(),
    port: 8080 as number,
    host: 'localhost' as string,
    dbUrl: "mongodb://localhost:27017/hungry",
};

export const requestMethods = {
    GET: 'GET' as string,
    POST: 'POST' as string,
    DELETE: 'DELETE' as string,
    UPDATE: 'PUT' as string,
};