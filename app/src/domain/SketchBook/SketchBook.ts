import { Request, Response, Router } from "express";

export class SketchBook {
  public static routes(): Router {
    const routes: Router = Router()

    routes.get('/figures/:country', SketchBook.show)
    routes.get('/figures/:country/:id', SketchBook.index)

    routes.put('/figures/:id', SketchBook.store)

    return routes
  }

  static index(req: Request, res: Response) {

  }

  static show(req: Request, res: Response) {

  }
  static store(req: Request, res: Response) {

  }
}
