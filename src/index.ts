import express from "express";
import { configurations } from "./configurations/configurations";
import { setRoutes } from "./routes/routes";

const app = express();
const port = configurations.port;
const host = configurations.host;

app.listen(port, host, () => {
    console.log(`Server listing at https://${host}:${port}`);
    setRoutes(app);
})