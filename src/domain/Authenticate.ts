type AuthParams = {
  user: string,
  password: string
}
type AuthResponse = {
  token: string
}

export class Authenticate {
  static auth ({user, password}: AuthParams): AuthResponse {
    return {token:''}
  }
}
