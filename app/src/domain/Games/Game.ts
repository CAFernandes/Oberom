import { Connection } from "@database/Connection";
import { AppError } from "@errors/AppError";
import { GameModel } from "@models/GameModel";
import { Request, Response, Router } from "express";
// import { connect, connection } from "mongoose";
type StoreRequestGame = {
  name?: String,
  price?: String,
  category?: String
}

/* It's a class that has a static method called routes that returns a router object */
export class Game {
  /**
    * `routes()` is a function that returns a router object that has a get route that takes a request and response object and passes
    * them to the `validate()` function in the `Session` class
    * @returns A router object
    */
  public static routes(): Router {
    const routes: Router = Router()
    routes.get('/game', Game.list)
    routes.post('/game', Game.store)
    return routes
  }

  /**
   * It validates the token and returns the user's information
   * @param {Request} req - Request - The request object
   * @param {Response} res - Response - The response object
   * @returns The response is being returned.
   */
  static async list(_req: Request, res: Response) {
    try {
      await Connection()

      // const model = new GameModel()
      const games = await GameModel.find({})
      return res.status(200).json(games)
    } catch (error: any) {
      return res.status(500).send(error?.message || error);
    }
  }
  static async store(req: Request, res: Response) {
    const validate = Game.validateRequestStore(req.body)
    if (Object.keys(validate).length > 0) {
      const _error = `${validate?.name} ${validate?.price} ${validate?.category}`
      throw new AppError(400, _error)
    }

    const { name, price, category } = req.body

    await Connection()

    const game = new GameModel({ name, price, category })
    await game.save()

    let storage = game.toObject();

    return res.status(200).json({
      ...storage
    })
  }

  static validateRequestStore(body: StoreRequestGame): { name?: string, price?: string, category?: string } {
    let error = {}
    if (!body.name) {
      error = { ...error, ...{ name: 'Not Defined Name.' } }
    }
    if (!body.price) {
      error = { ...error, ...{ name: 'Not Defined Price.' } }
    }
    if (!body.category) {
      error = { ...error, ...{ name: 'Not Defined Category.' } }
    }
    return error
  }
}
