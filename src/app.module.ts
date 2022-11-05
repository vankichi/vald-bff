import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { InsertController } from './insert/insert.controller';
import { InsertService } from './insert/insert.service';

@Module({
  controllers: [AppController, CatsController, InsertController],
  providers: [AppService, InsertService],
  imports: [ConfigModule.forRoot({
    envFilePath: ['.env']
  })],
})
export class AppModule {}
