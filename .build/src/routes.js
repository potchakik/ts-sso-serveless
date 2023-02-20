"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("./utils/passport"));
function routes(app) {
    app.get("/healthcheck", (req, res) => {
        res.status(200).send({
            status: "ok",
        });
    });
    app.get("/google", passport_1.default.authenticate("google", {
        scope: ["profile", "email"],
    }), (req, res) => res.redirect("/"));
}
//Google oauth
exports.default = routes;
