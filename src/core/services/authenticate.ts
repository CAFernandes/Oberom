import { logger } from '@utils/logger';
import 'dotenv/config';
import { verify } from 'jsonwebtoken';

type User = {
  id: string|null,
  name?: string,
  permissions?: string
}
type AuthenticateResult = {
  user?: User
  error?: string
}
type AuthenticateParams = {
  token: string|undefined
}

export const authenticate = ({ token }: AuthenticateParams): AuthenticateResult => {
  if (!token) {
    return { error: 'Token not informed' };
  }
  logger.debug( process.env.JWT_SECRET ?? 'not_acceptable')
  const result = verify(token, process.env.JWT_SECRET||'not_acceptable')
  logger.debug({result})
  return { user: { id: '0' } }
}
