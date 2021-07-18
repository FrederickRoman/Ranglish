import Process from "./process";
import { createServer, Server } from "http";
import app from "./app";
import dotenv from 'dotenv';

class RanglishServer {
  static start(): void {
    dotenv.config();
    const DEFAULT_PORT: number = 3000;
    const port: string | number = process.env.PORT || DEFAULT_PORT;
    const server: Server = createServer(app);
    server.listen(port, (): void =>
      console.log(`server is now listening to port: ${port}`)
    );
  }
}

(new Process).monitor();
RanglishServer.start();
