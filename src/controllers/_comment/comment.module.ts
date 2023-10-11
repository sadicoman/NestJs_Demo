// Chemin du fichier : src/controllers/_comment/comment.module.ts

import { Module } from '@nestjs/common';
import { DbModule } from '../../services/db/db.module';
import { CommentController } from './comment.controller';

@Module({
  imports: [DbModule],
  controllers: [CommentController],
})
export class CommentModule {}
