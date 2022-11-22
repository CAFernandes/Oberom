
import { logger } from "@utils/logger";
import { Logger } from "log4js";
/* The AppError class is a custom error class that extends the Error class. It has a code and message property, and a saveError
method that logs the error to the console */
export class AppError {
  public readonly code:number
  public readonly message:string
  private error?:Error
  private logger: Logger
  constructor(code=400, message:string, error?:Error) {
    this.code = code
    this.message = message
    this.error = error
    this.logger = logger
  }
  saveError(): void {
    this.logger.level = 'error'
    this.logger.fatal(`${this.message} - ${this.error?.message} ${this.error?.stack}`)
  }
}
