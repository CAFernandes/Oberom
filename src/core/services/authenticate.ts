import { logger } from '@utils/logger';
import 'dotenv/config';
import { JwtPayload, verify } from 'jsonwebtoken';

type AuthenticateParams = {
  token: string|undefined
}

/**
 * It receives a token, verifies it, and returns the result
 * @param {AuthenticateParams} - AuthenticateParams
 */
export const authenticate = ({ token }: AuthenticateParams): string|JwtPayload => {
  if (!token) {
    return { error: 'Token not informed' };
  }
  logger.debug( process.env.JWT_SECRET ?? 'not_acceptable')
  const result = verify(token, process.env.JWT_SECRET||'not_acceptable')
  logger.debug({result})
  return result
}
