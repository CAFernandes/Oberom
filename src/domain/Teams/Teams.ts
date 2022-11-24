import { TeamsList } from "@base/TeamsList";
import { Request, Response, Router } from "express";
import { filterTeamsByGroup } from "./services/filterTeamsByGroup";

/* It takes the teams array, filters it by group, and returns the response */
export class Teams {
  /**
   * It returns a router object.
   * @returns The routes are being returned.
   */
  static routes(): Router {
    const routes = Router()
    routes.get('/teams', Teams.show)
    routes.get('/figures/:team/:id', Teams.index)
    return routes
  }
  /**
   * It takes the teams array, filters it by group, and returns the response
   * @param {Request} _ - Request - this is the request object that contains all the information about the request.
   * @param {Response} res - Response - this is the response object that will be sent back to the client.
   * @returns The response is being returned.
   */
  static show (_: Request, res: Response) {
    // const response = filterTeamsByGroup(teams);
    return res.json(filterTeamsByGroup(TeamsList))
  }
  static index () {}
}
