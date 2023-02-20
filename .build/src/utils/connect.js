"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const logger_1 = __importDefault(require("./logger"));
const config_1 = __importDefault(require("config"));
const client = new pg_1.Client({
    host: config_1.default.get("postgres.host"),
    user: config_1.default.get("postgres.user"),
    password: config_1.default.get("postgres.password"),
    database: config_1.default.get("postgres.database"),
    port: config_1.default.get("postgres.port"),
});
client
    .connect()
    .then(() => {
    logger_1.default.info("Connected To DB");
})
    .catch((err) => {
    logger_1.default.error(err);
});
//const getData = (
//  query: QueryArrayConfig<any[]>,
//  callback: (arg0: Error | null, arg1: any[][] | null) => void
//) => {
//  client.query(query, (err, res) => {
//    if (err) {
//      console.log(err);
//      callback(err, null);
//    } else {
//      callback(null, res.rows);
//    }
//  });
//};
exports.default = client;
