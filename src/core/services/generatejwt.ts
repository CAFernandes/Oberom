import { sign } from "jsonwebtoken"

type AuthResponse = {
  token: string
}

/**
 * It takes a payload and a subject, and returns a token
 * @param {any} payload - The data you want to sign.
 * @param {string} subject - The subject of the token.
 * @returns A function that takes in a payload and a subject and returns an AuthResponse
 */
export const generatejwt = (payload:any, subject: string): AuthResponse => {
  const token = sign(payload, process.env.JWT_SECRET || 'not_acceptable', {
    subject: subject,
    expiresIn: process.env.JWT_EXPIRES || '1h'
  })
  return { token }
}
