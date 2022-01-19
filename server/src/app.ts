import express, { Express } from "express";
import path from "path";
import compression from "compression";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import apiRouter from './api/routes/indexRouter';
const app: Express = express();
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
