import { AppError } from "@errors/AppError";
import * as dotenv from 'dotenv';
import { Request, Response, Router } from "express";
import { generatejwt } from "src/core/services/generatejwt";
dotenv.config({
  path: process.env.TS_NODE_DEV ? '.env.development.local' : '.env'
})

/* It's a class that has a static method called routes that returns a router object with a post method that has a static method
called auth that returns a response object */
export class Authenticate {
  /**
   * `routes()` is a function that returns a router object that has a post route that takes a request and response object and passes
   * them to the `auth()` function in the `Authenticate` class
   * @returns A router object
   */
  public static routes(): Router {
    const routes = Router()
    routes.post('/user', Authenticate.auth)
    return routes
  }
  /**
   * It receives a request and a response, and returns a response
   * @param {Request} req - Request - The request object
   * @param {Response} res - Response - The response object
   * @returns A response with a status of 200 and a json object with the response from the generatejwt function.
   */
  static auth(req: Request, res: Response): Response<any> {
    const { user, password } = req.body
    if (!user || !password) {
      throw new AppError(400, 'User or Password Invalid')
    }
    const response = generatejwt({user: user, data: Date.now()}, String(Date.now()))
    return res.status(200).json(response)
  }
}
