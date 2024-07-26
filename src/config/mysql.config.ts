import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

export const MYSQL_CONFIG = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  // name: 'local',
  useFactory(configService: ConfigService) {
    return {
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '7777',
      database: 'nestjs',
      // synchronize: true,
      // entities: [entity_path],
      logging: true,
      // 自动加载实体类
      autoLoadEntities: true,
    };
  },
});

export const MYSQL_CONFIG_HOME = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  name: 'home',
  useFactory(configService: ConfigService) {
    return {
      type: 'mysql',
      host: configService.get('DB_HOST'),
      port: configService.get('DB_PORT'),
      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_DATABASE'),
      // synchronize: true,
      // entities: [entity_path],
      logging: true,
      // 自动加载实体类
      autoLoadEntities: true,
    };
  },
});
