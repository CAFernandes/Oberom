import { NextFunction, Request, Response } from 'express'
import { AppError } from '../errors/AppError'

export const errorHandling = (err: Error, _: Request, res: Response, __: NextFunction) => {
  if (err instanceof AppError) return res.status(err.code).json({ status: 'error', message: err.message })
  console.log(err)
  const error = new AppError(500, err.name, err)
  error.saveError()
  return res.status(500).json({ status: 'error', message: 'Internal Server Error' })
}
