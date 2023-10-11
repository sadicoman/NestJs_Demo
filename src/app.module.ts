import { Module } from '@nestjs/common';
import { MenuModule } from './controllers/_menu/_menu.module';
import { SearchModule } from './controllers/_search/_search.module';
import { CommandModule } from './controllers/_command/_command.module';
import { HomeModule } from './controllers/_home/home.module';
import { CommentModule } from './controllers/_comment/comment.module';
import { AboutModule } from './controllers/_about/about.module';

@Module({
  imports: [
    MenuModule,
    SearchModule,
    CommandModule,
    HomeModule,
    CommentModule,
    AboutModule,
  ],
})
export class AppModule {}
