import { format, transports } from 'winston';
import { WinstonModule } from 'nest-winston';
import DailyRotateFile from 'winston-daily-rotate-file';

import { ConfigModule, ConfigService } from '@nestjs/config';

export const LOG_CONFIG = WinstonModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory(configService: ConfigService) {
    return {
      exitOnError: false,
      format: format.combine(
        format.colorize(),
        format.label({ label: 'services' }),
        format.splat(),
        format.timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }),
        format.printf(({ timestamp, level, message, context }) => {
          return JSON.stringify({
            level: level.toUpperCase(),
            datetime: timestamp,
            context: context || 'Application',
            message: message,
            ms: `+${Date.now() % 1000}ms`,
          });
        }),
      ),

      transports: [
        new transports.Console({
          level: 'info',
        }),
        new DailyRotateFile({
          filename: `${configService.get('LOG_PATH') || 'logs'}/%DATE%.log`,
          datePattern: 'YYYY-MM-DD-HH',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '31d',
          format: format.combine(
            format.printf(({ timestamp, level, message, context }) => {
              return JSON.stringify({
                level: level.toUpperCase(),
                datetime: timestamp,
                context: context || 'Application',
                message: message,
                ms: `+${Date.now() % 1000}ms`,
              });
            }),
          ),
        }),
      ],
    };
  },
});
