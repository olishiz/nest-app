import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherController } from './weather/weather.controller';
import { FormDataController } from './form-data/form-data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemoEntity } from './database/entities/DemoEntity';
import { FormDataService } from './form-data/form-data.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'nestjs',
      entities: [DemoEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([DemoEntity]),
    UsersModule,
  ],
  controllers: [AppController, WeatherController, FormDataController],
  providers: [AppService, FormDataService],
})
export class AppModule {}
