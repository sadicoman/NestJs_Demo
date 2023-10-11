// Chemin du fichier : src/controllers/_about/about.module.ts

import { Module } from '@nestjs/common';
import { AboutController } from './about.controller';
import { DbService } from '../../services/db/db.service';

@Module({
  controllers: [AboutController],
  providers: [DbService],
})
export class AboutModule {}
