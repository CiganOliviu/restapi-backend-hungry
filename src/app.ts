import bodyParser from 'body-parser';
import { configurations } from "./configurations/configurations";
import { setRoutes } from "./routes/routes";
import setupDatabase from "./db";

const port = configurations.port;
const host = configurations.host;

configurations.app.use(bodyParser.json());

configurations.app.listen(port, host, () => {
    console.log(`Server listing at https://${host}:${port}`);

    setupDatabase().then(() => {

    });

    setRoutes(configurations.app, configurations.cors);
})