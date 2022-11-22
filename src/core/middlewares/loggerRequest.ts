import { NextFunction, Request, Response } from 'express'
import { getLogger } from 'log4js'

export const loggerRequest = (req: Request, res: Response, next: NextFunction): void => {
  const { method, url, body, query } = req
  const log = getLogger(method)
  log.trace(`Rota: ${url.split('?')[0]} - Query: ${JSON.stringify(query)} - Body: ${JSON.stringify(body)}`)
  next()
}
