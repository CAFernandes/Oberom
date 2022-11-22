import { logger } from '@utils/logger';
import 'dotenv/config';
import App from './infra/app';

const PORT = Number(process.env.PORT) || 3000;

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

App.app.listen(PORT, () => {
  logger.level = "debug";
  console.clear()
  logger.info(`Backend Staterd in: http://localhost:${PORT}`);
  logger.info(`Ambiente: ${process.env.TS_NODE_DEV ? 'DEVELOPMENT': 'PRODUCTION'}`)
  logger.info(`Servidor rodando na porta: ${PORT}`);
});
process.once('SIGINT', () => App.die());
