import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.getOrThrow('PGHOST'),
        port: configService.getOrThrow('PGPORT'),
        database: configService.getOrThrow('PGDATABASE'),
        username: configService.getOrThrow('PGUSER'),
        password: configService.getOrThrow('PGPASSWORD'),
        autoLoadEntities: true,
        synchronize: true,
        retryAttempts: 20,
        retryDelay: 2000,
        ssl: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
