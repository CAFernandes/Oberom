import { AppError } from "@errors/AppError";
import { authenticate } from "@services/authenticate";
import { Router } from "express";
import { Request, Response } from "express-serve-static-core";
import { JwtPayload } from "jsonwebtoken";

/* It's a class that has a static method called routes that returns a router object */
export class Session {  /**
  * `routes()` is a function that returns a router object that has a get route that takes a request and response object and passes
  * them to the `validate()` function in the `Session` class
  * @returns A router object
  */
  public static routes(): Router {
    const routes: Router = Router()
    routes.get('/session', Session.validate)
    return routes
  }

  /**
   * It validates the token and returns the user's information
   * @param {Request} req - Request - The request object
   * @param {Response} res - Response - The response object
   * @returns The response is being returned.
   */
  static validate(req: Request, res: Response): Response<any> {
    const token: string | undefined = req.headers.authorization
    if (!token) {
      throw new AppError(401, 'Not Authenticate')
    }
    const [type, jwt] = token.split(' ')
    if (!/^Bearer$/i.test(type)) {
      throw new AppError(401, 'Malformatted token');
    }
    try {
      const response: string|JwtPayload = authenticate({ token: jwt })
      return res.status(202).json(response)
    } catch (e: any) {
      return res.status(401).json(e)
    }
  }
}
