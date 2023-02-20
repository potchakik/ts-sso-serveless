"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const logger_1 = __importDefault(require("./utils/logger"));
const connect_1 = __importDefault(require("./utils/connect"));
const pino_http_1 = __importDefault(require("pino-http"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const routes_1 = __importDefault(require("./routes"));
const port = config_1.default.get("port");
const app = (0, express_1.default)();
app.use((0, pino_http_1.default)({ logger: logger_1.default }));
app.get("/users", (req, res) => {
    connect_1.default.query("SELECT * FROM user", (err, res) => {
        if (err) {
            console.error(err);
        }
        else {
            console.log(res.rows);
        }
        connect_1.default.end();
    });
});
(0, routes_1.default)(app);
//app.listen(port, async () => {
//  logger.info(`App is running at http://localhost:${port}`);
//  routes(app);
//});
exports.handler = (0, serverless_http_1.default)(app);
