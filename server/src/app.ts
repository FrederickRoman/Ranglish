import express, { Express } from "express";
import path from "path";
import compression from "compression";
import cors from "cors";
const app: Express = express();
const morgan = require("morgan");
const helmet = require("helmet");
const apiRouter = require('./api/routes/indexRouter');
const buildDirectory: string = path.join(__dirname, "../../../client/dist");
const serveStatic = express.static(buildDirectory);

app
  .use(morgan("dev"))
  .use(helmet())
  .use(compression())
  .use(cors())
  .use('/api', apiRouter)
  .use(serveStatic);

export default app;
