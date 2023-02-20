"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function routes(app) {
    app.get("/healthcheck", (req, res) => {
        res.status(200).send({
            status: "ok",
        });
    });
}
exports.default = routes;
