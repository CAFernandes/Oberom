import { logger } from '@utils/logger';
import { NextFunction, Request, Response } from 'express';


const url = process.env.REDIS_URL || 'redis://localhost:6379';


export const isCached = (req: Request, res: Response, next: NextFunction) => {
  logger.debug('Middleware applied')

  // if (!req.params.idUser) {
  //   next();
  //   return;
  // }
  // const { idUser } = req.params;

  // // getting our data by key (id)
  // const cacheKey: string = idUser;
  // const client:redis.RedisClientType = redis.createClient({ url });
  next();
  // client.get(cacheKey, (err: string, result:string) => {
  //   if (err) {
  //     console.error(err)
  //   }
  //   res.json(result)
  // })
};
