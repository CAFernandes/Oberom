import * as dotenv from 'dotenv';
import App from './infra/app';
dotenv.config({
  path: process.env.TS_NODE_DEV ? '.env.development.local' : '.env'
})

App.listen(Number(process.env.PORT) || 3000)
process.once('SIGINT', () => App.die());
