import { NextFunction, Request, Response } from 'express';
import { authenticate } from '../services/authenticate';

declare global {
  namespace Express {
    interface Request {
      userId?: string | null;
    }
  }
}

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
