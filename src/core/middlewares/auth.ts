import { NextFunction, Request, Response } from 'express';
import { authenticate } from '../services/authenticate';

declare global {
  namespace Express {
    interface Request {
      userId?: string | null;
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
    const response = authenticate({
      token: req.headers.authorization,
    });

    if (response.error) throw new Error(response.error);

    req.userId = response.user?.id;

    next();
  } catch ({ message }) {
    return res.status(401).json({ error: message });
  }
};
