import { Authenticate } from '@domain/Auth/Authenticate';
import { Session } from '@domain/Session/Session';
import { Teams } from '@domain/Teams/Teams';
import { errorHandling } from '@middlewares/errorHandling';
import { loggerRequest } from '@middlewares/loggerRequest';
import { logger } from '@utils/logger';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';


/* The class App is a class that extends the class Application from the express module */
class App {
  /* A property of the class App. It is a public property of type express.Application. */
  public app: express.Application;
  /**
   * The constructor function is called when the class is instantiated
   */
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }
  /**
   * This function is used to set up the middleware for the express server
   */
  middleware(): void {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.json({ limit: '25mb' }));
    this.app.use(express.urlencoded({ limit: '25mb', extended: true }));
    if (process.env.REQUEST_INTERCEPT) this.app.use(loggerRequest);
  }
  /**
   * This function is used to add the routes to the express app.
   */
  routes(): void {
    this.app.use(Authenticate.routes())
    this.app.use(Session.routes())
    this.app.use(Teams.routes())
    this.app.use(errorHandling)
  }
  /**
   * The function listen() is a method of the class App, which is a class that extends the class Application from the express module.
   * The listen() method takes a parameter of type Number, and returns nothing
   * @param {Number} PORT - Number - The port number that the server will listen to.
   */
  listen(PORT: Number): void {
    this.app.listen(PORT, () => {
      logger.level = "debug";
      console.clear()
      logger.info(`Backend Staterd in: http://localhost:${PORT}`);
      logger.info(`Ambiente: ${process.env.TS_NODE_DEV ? 'DEVELOPMENT' : 'PRODUCTION'}`)
      logger.info(`Servidor rodando na porta: ${PORT}`);
    });
  }
  /**
   * The function die() is a void function that exits the process
   */
  die(): void {
    process.exit(0);
  }
}
/* Exporting the class App as a default export. */
export default new App();
