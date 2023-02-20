import { Client, QueryArrayConfig } from "pg";
import logger from "./logger";
import config from "config";

const client = new Client({
  host: config.get<string>("postgres.host"),
  user: config.get<string>("postgres.user"),
  password: config.get<string>("postgres.password"),
  database: config.get<string>("postgres.database"),
  port: config.get<number>("postgres.port"),
});

client
  .connect()
  .then(() => {
    logger.info("Connected To DB");
  })
  .catch((err) => {
    logger.error(err);
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

export default client;
