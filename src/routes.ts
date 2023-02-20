import { Express, Request, Response } from "express";
import strategy from "./utils/passport";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.status(200).send({
      status: "ok",
    });
  });

  app.get(
    "/google",
    strategy.authenticate("google", {
      scope: ["profile", "email"],
    }),
    (req: Request, res: Response) => res.redirect("/")
  );
}

//Google oauth

export default routes;
