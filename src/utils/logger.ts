import pino from "pino";
import dayjs from "dayjs";
import pretty from "pino-pretty";

const log = pino(
  {
    //level: "info",
    base: {
      pid: false,
    },
    time: () => `,"time":"${dayjs().format()}`,
  },
  pretty()
);

export default log;
