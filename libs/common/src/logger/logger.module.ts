import { Module } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { LoggerModule as PinoLogger } from 'nestjs-pino';

@Module({
  imports: [
    PinoLogger.forRoot({
      pinoHttp: {
        genReqId: (req, res) => {
          const id = req.headers['x-request-id'] || randomUUID();
          res.setHeader('X-Request-ID', id);
          return id;
        },
        transport:
          process.env.NODE_ENV !== 'production'
            ? {
                target: 'pino-pretty',
                options: {
                  singleLine: true,
                },
              }
            : undefined,
      },
    }),
  ],
})
export class LoggerModule {}
