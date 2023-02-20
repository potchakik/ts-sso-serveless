"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = __importDefault(require("pino"));
const dayjs_1 = __importDefault(require("dayjs"));
const pino_pretty_1 = __importDefault(require("pino-pretty"));
const log = (0, pino_1.default)({
    //level: "info",
    base: {
        pid: false,
    },
    time: () => `,"time":"${(0, dayjs_1.default)().format()}`,
}, (0, pino_pretty_1.default)());
exports.default = log;
