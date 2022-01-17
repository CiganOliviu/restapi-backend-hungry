"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const configurations_1 = require("./configurations/configurations");
const routes_1 = require("./routes/routes");
const app = (0, express_1.default)();
const port = configurations_1.configurations.PORT;
const host = configurations_1.configurations.HOST;
app.listen(port, host, () => {
    console.log(`Server listing at https://${host}:${port}`);
    (0, routes_1.setRoutes)(app);
});
