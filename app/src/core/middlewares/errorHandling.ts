import { AppError } from '@errors/AppError'
import { logger } from '@utils/logger'
import { NextFunction, Request, Response } from 'express'

/**
 * If the error is an instance of AppError, return the error code and message. Otherwise, log the error, save it to the database, and
 * return a generic error message
 * @param {Error} err - Error - The error object that was thrown
 * @param {Request} _ - Request - This is the request object.
 * @param {Response} res - The response object
 * @param {NextFunction} __ - NextFunction is a function that is called when the middleware is done.
 * @returns A function that takes in an error, request, response, and next function.
 */
export const errorHandling = (err: Error, _: Request, res: Response, __: NextFunction) => {
  logger.fatal(err)

  if (err instanceof AppError) return res.status(err.code).json({ status: 'error', message: err.message })

  const error = new AppError(500, err.name, err)
  error.saveError()
  return res.status(500).json({ status: 'error', message: error, err })
}
