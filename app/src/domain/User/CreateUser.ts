import { Request, Response, Router } from "express";

export class User {
  routes(): Router {
    throw new Error("Method not implemented.");
  }
  public static routes(): Router {
    const routes: Router = Router()
    return routes
  }

  public static store(req: Request, res: Response) {}
}
