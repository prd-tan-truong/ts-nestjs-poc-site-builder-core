import { Module, RequestMethod } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { LoggerModule as PinoLogger } from 'nestjs-pino';

@Module({
  imports: [
    PinoLogger.forRoot({
      pinoHttp: {
        customReceivedMessage: function () {
          return `Request received `;
        },
        customSuccessMessage: function () {
          return `Request completed `;
        },
        serializers: {
          req(req) {
            req.body = req.raw.body;
            return {
              id: req.id,
              method: req.method,
              url: req.url,
              query: req.query,
              params: req.params,
              headers: req.headers,
              body: req.body,
            };
          },
        },
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
      exclude: [{ method: RequestMethod.ALL, path: 'health' }],
    }),
  ],
})
export class LoggerModule {}
