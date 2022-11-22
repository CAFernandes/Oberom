import * as dotenv from 'dotenv';
import App from './infra/app';
dotenv.config({
  path: process.env.TS_NODE_DEV ? '.env.development.local' : '.env'
})

//atenção habilitar o log desabilita a saida no console
if (process.env.SAVE_LOG == 'true') {
  configure({
    appenders: {
      file: {
        type: 'file',
        filename: 'api.log',
        maxLogSize: 10 * 1024 * 1024, // = 10Mb
        backups: 5, // keep five backup files
        compress: true, // compress the backups
        encoding: 'utf-8',
        mode: 0o0640,
        flags: 'w+'
      },
      dateFile: {
        type: 'dateFile',
        filename: 'api.log',
        pattern: 'yyyy-MM-dd-hh',
        compress: true
      },
      out: {
        type: 'stdout'
      }
    },
    categories: {
      default: { appenders: ['file', 'dateFile', 'out'], level: 'trace' }
    }
  })
}

App.listen(Number(process.env.PORT) || 3000)
process.once('SIGINT', () => App.die());
