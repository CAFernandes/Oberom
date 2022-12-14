import { NextFunction, Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { authenticate } from '../services/authenticate';

declare global {
  namespace Express {
    interface Request {
      payload?: string | JwtPayload;
    }
  }
}

/**
 * It tries to authenticate the user using the token sent in the request headers, and if it fails, it returns a 401 error
 * @param {Request} req - Request - The request object
 * @param {Response} res - Response - This is the response object that we will use to send back a response to the client.
 * @param {NextFunction} next - NextFunction - This is a function that will be called when the middleware is done.
 * @returns The userId is being returned.
 */
export const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const response: string | JwtPayload = authenticate({
      token: req.headers.authorization,
    });

    req.payload = response

    next();
  } catch ({ message }) {
    return res.status(401).json({ error: message });
  }
};
