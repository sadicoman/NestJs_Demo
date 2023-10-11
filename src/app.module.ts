import { Module } from '@nestjs/common';
import { MenuModule } from './controllers/_menu/_menu.module';

@Module({
  imports: [MenuModule],
})
export class AppModule {}
