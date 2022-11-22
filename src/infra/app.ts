import { auth } from '@middlewares/auth';
import { isCached } from '@middlewares/isCached';
import { loggerRequest } from '@middlewares/loggerRequest';
import cors from 'cors';
import express, { Request, Response, Router } from 'express';
import helmet from 'helmet';
class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }
  middleware(): void {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.json({ limit: '25mb' }));
    this.app.use(express.urlencoded({ limit: '25mb', extended: true }));
    if (process.env.REQUEST_INTERCEPT) this.app.use(loggerRequest);
  }
  routes(): void {
    const route = Router()
    route.get('/', auth, isCached, App.hello)
    this.app.use(route)
    // this.app.use(Criptografia.routes())
    // this.app.use(QueueController.routes())
    // this.app.use(ErrorHandling);
  }
  private static hello(req: Request, res: Response) {
    return res.status(200).json({message: 'server started'})
  }
  die(): void {
    process.exit(0);
  }
}
export default new App();
