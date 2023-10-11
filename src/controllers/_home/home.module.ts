import { Module } from '@nestjs/common';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';
import { DbModule } from '../../services/db/db.module';

@Module({
  controllers: [HomeController],
  providers: [HomeService],
  imports: [DbModule],
})
export class HomeModule {}
