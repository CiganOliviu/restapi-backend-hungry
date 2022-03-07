import express from 'express'

export const configurations = {
    app: express(),
    cors: require('cors'),
    corsOptions: {
        origin: ['http://localhost:3000'],
        optionsSuccessStatus: 200
    },
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