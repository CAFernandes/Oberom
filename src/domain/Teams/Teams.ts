import { teams } from "@base/teams";
import { Request, Response, Router } from "express";
import { filterTeamsByGroup } from "./services/filterTeamsByGroup";

export class Teams {
  static routes(): Router {
    const routes = Router()
    routes.get('/teams', Teams.show)
    routes.get('/figures/:team/:id', Teams.index)
    return routes
  }
  static show (req: Request, res: Response) {
    const response = filterTeamsByGroup(teams);
    return res.json(response)
  }
  static index () {}
}
