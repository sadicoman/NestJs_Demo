import { Module } from '@nestjs/common';
import { SearchController } from './_search.controller';
import { SearchService } from './_search.service';

@Module({
  controllers: [SearchController],
  providers: [SearchService]
})
export class SearchModule {}
