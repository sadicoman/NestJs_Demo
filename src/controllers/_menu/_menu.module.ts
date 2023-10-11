import { Module } from '@nestjs/common';
import { MenuController } from './_menu.controller';
import { MenuService } from './_menu.service';

@Module({
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
