import express, { Application, Request, Response } from "express";
import config from "config";
import logger from "./utils/logger";
import client from "./utils/connect";
import pinoHttp from "pino-http";
import routes from "./routes";

const port = config.get<number>("port");
const app = express();

app.use(pinoHttp({ logger }));

app.get("/users", (req: Request, res: Response) => {
  client.query("SELECT * FROM user", (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(res.rows);
    }
    client.end();
  });
});

app.listen(port, async () => {
  logger.info(`App is running at http://localhost:${port}`);
  routes(app);
});
