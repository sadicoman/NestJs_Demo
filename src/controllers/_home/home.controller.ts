import { Controller, Get } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller()
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  async index() {
    const homePageData = await this.homeService.getHomePageData();
    return homePageData;
  }
}
