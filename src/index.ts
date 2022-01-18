import express from "express";
import bodyParser from 'body-parser';
import { configurations } from "./configurations/configurations";
import { setRoutes } from "./routes/routes";
import setupDatabase from "./db";

const app = express();
const port = configurations.port;
const host = configurations.host;

app.use(bodyParser.json());

app.listen(port, host, () => {
    console.log(`Server listing at https://${host}:${port}`);

    setupDatabase().then(response => {

    });

    setRoutes(app);
})