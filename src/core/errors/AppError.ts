
import { getLogger, Logger } from "log4js";
export class AppError {
  public readonly code:number
  public readonly message:string
  private error?:Error
  private logger: Logger
  constructor(code=400, message:string, error?:Error) {
    this.code = code
    this.message = message
    this.error = error
    this.logger = getLogger('IM-API');
  }
  saveError(): void {
    this.logger.level = 'error'
    this.logger.fatal(`${this.message} - ${this.error?.message} ${this.error?.stack}`)
  }
}
