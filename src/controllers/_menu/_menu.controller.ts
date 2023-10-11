import { Controller, Get } from '@nestjs/common';
import { MenuService } from './_menu.service';

// COUCHE ROUTAGE + CONTROLLERS (ne fait que lister les routers et appel le service (businiess + db))
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  //localhost:3000/menu
  @Get()
  getAllMenu(): any {
    try {
      return this.menuService.getAllMenu();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  //localhost:3000/menu/:id
  @Get(':id')
  getOneDish(): any {
    try {
      return this.menuService.getOneDish();
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
