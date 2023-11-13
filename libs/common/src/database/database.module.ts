import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'mssql',
        host: configService.getOrThrow('MSSQL_HOST'),
        port: configService.getOrThrow('MSSQL_PORT'),
        database: configService.getOrThrow('MSSQL_DATABASE'),
        username: configService.getOrThrow('MSSQL_USERNAME'),
        password: configService.getOrThrow('MSSQL_PASSWORD'),
        synchronize: false,
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {
  static forFeature(models: EntityClassOrSchema[]) {
    return TypeOrmModule.forFeature(models);
  }
}
